# travel-mk

> 仿去哪网的三个页面

> 用到的框架 vue + vuex + vue-router + axios + better-scroll + vue-awesome-swiper

## 实现步骤
### 第一步
1. 安装vue-cli  npm install -g vue-cli
2. 通过脚手架安装好模版  vue init webpack travel-mk
3. 根据提示完成
4. 每次新建好主页面，都需要在router中配置相关路由
注意事项： 可以通过vue -V判断是否有vue-cli的存在


### 第二步 - 完成首页
1. 我们需要一些图标，可以通过iconfont引入 http://www.iconfont.cn/(具体使用方式参考https://blog.csdn.net/wh2691259/article/details/52233140)
2. css的预处理器使用scss了
```
npm install --save-dev sass-loader
npm install --save-dev node-sass
```
安装完成以后就可以使用scss了

3. 首页banner的实现
> 使用了vue-awesome-swiper框架

> 使用方式查看 https://www.npmjs.com/package/vue-awesome-swiper

> 详细使用方式查看https://www.swiper.com.cn/api/index.html

> 在项目中使用的是按需引入，操作如下
```
<!-- 在script中引入 -->
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
<!-- 组件使用 -->
components: {
    swiper,
    swiperSlide
},
<!-- 在data中定义好数据，然后在template中使用 -->
<swiper :options="swiperOption" class="wrapper">
    <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <img :src="slide.imgUrl" :alt="slide.title">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
<!-- data中设置 -->
<!-- swiperOption的变量，具体可看官网(https://www.swiper.com.cn/api/index.html)  -->
<!-- 注意:3.0.0以上查看4.0的api，低于3.0.0查看3.0的api -->
```

4. 菜单页面的完成
> 先按照一般布局进行布局，完成以后发现可以翻页，因此使用了swiper插件进行包装

> 同上轮播图一样
```
<!-- 这是菜单布局 -->
<div class="icon" v-for="item in page" :key="item.id">
    <a class="imgbox">
        <img :src="item.imgUrl" :alt="item.desc">
    </a>
    <span>{{item.desc}}</span>
</div>
<!-- 这是使用swiper以后 -->
<swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <a class="imgbox">
                <img :src="item.imgUrl" :alt="item.desc">
            </a>
            <span>{{item.desc}}</span>
        </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>

```

> 因为api返回的数据是不符合要求的，因此需要处理成我所需要的格式

```
<!-- 如果不处理。会渲染多个swiper不止两个 -->

<!-- 在计算属性中计算 -->
computed(){
    const page = [];
    this.List.forEach((v,index)=>{
        const page = Math.floor(index/8) // 一屏要暂时8个，因此下标下应该有8条数据
        if (!pages[page]) { // 不存在就为空
          pages[page] = []
        }
        pages[page].push(item)
    })
    return pages
}
```

5. 接下来就是热门榜单，猜你喜欢以及周末去哪模块
> 布局就不说了，使用flex布局会更方便

### 第三步 完成城市列表页面
1.需要点击首页的城市跳转到列表页，因此
```
<!-- 设置router-like跳转 -->
<router-link to="/city">
    <span>{{city}}</span>
    <i class="iconfont icon-sanjiao"></i>
</router-link>
```

2. 建立city.vue文件，搜索组件，列表组件以及字母表组件（[具体查看](https://github.com/Qin-mx/travel-mk/tree/master/src/views/pages)）

3.在建立List组件时使用了better-scroll插件([地址](https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md))
```
<!-- 在项目中的使用方式 -->
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
<!-- 使用 -->
mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
},
<!-- template中使用 -->
<div class="wrapper" ref="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
</div>
```
4. 需要注意的标签的格式，否则是无法使用的,
> 如果使用插件以后的click事件等无法使用，需要使用下面的方式
```
this.scroll = new BScroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
```

5. 最后需要注意的是如果完成以上插件还是不生效，请设置最外层div的定位
```
<!-- 例如： -->
.list{
    background: #f5f5f5;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
 }
```
6. 完成字母表的封装(通过taouch事件实现)

7. 跳转指定字母下通过插件的scrollToElement方法
```
    letter () {
      if (this.letter) {
        let ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
```
8. 完成以上数据，就该实现点击城市，返回主页面，更改城市
> 当城市发生改变是使用了vuex，保存了一个state的值city
通修改city同步改变
```
 handlechangeCity (val) {
      // 第一种方式:通过修改actions的值，来同步修改
    //   this.$store.dispatch('changeCity', val)
      //   第二种，直接修改mutations
    //   this.$store.commit('changeCity', val)
      //   第三种方式
      this.changeCity(val)
      this.$router.push('/')
      // 保存到本地
      localStorage.setItem('city', val)
    },
    ...mapMutations(['changeCity'])

```
> 因为刷新以后不存在了，所以需要保存在本地

```
<!-- vuex中写 -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {
  console.log(err)
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        if (localStorage.city) {
          localStorage.city = city
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
})

```

### 第四步 详情页面
1. 详情页面难点主要在与图片的展示以及滚动时heade的颜色变化

> head的颜色变化
```
<!-- 因为使用了keepalive，因此时间写在actived里 -->
activated () {
    window.addEventListener('scroll', this.handleScroll)
},
<!-- 在离开当前组件是移除，防止其他页面也会触发该事件 -->
deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    this.isbgColor = true
},
<!-- 在事件中判断滚动的高度来改变状态 -->
handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(top)
      if (top > 5) {
        this.isbgColor = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacity = {opacity}
        this.opacityIcon = {opacity}
      } else {
        this.isbgColor = true
        this.opacityIcon = {
          opacity: 1
        }
      }
    },
```
> 图片的展示 同样使用了swiper组件
```
<!-- 配置就不细说，重点是在使用时的注意事项 -->
<!-- 由于使用了fixed的布局，因此需要在swiper-wrapper上添加align-items:center;才能居中 -->
.swiper-wrapper{
        align-items:center; 
}
```

### 到现在就算完成了这几个页面。在页面中还有一些注意事项
* 不要把mock数据放在src里，应该放在static，否则会找不到地址
* 在使用nuxt.js的时候，需要更改swiper的引用
* 如果是个人项目，api在proxyTable中写了，最好在打包以后，不要用，用api给定的，因为我们没有使用ng去转发，是不能找到地址的



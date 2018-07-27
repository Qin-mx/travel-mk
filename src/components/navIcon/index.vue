<template>
    <div class="nav__icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <a class="imgbox">
                        <img :src="item.url" :alt="item.title">
                    </a>
                    <span>{{item.title}}</span>
                </div>
            </swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'NavIcon',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li'
        }
      },
      navList: [
        {
          id: 1,
          title: '景点门票',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: 2,
          title: '北京必游',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          id: 3,
          title: '夏日玩水',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png'
        },
        {
          id: 4,
          title: '文化古迹',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
        },
        {
          id: 5,
          title: '动植物园',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
        },
        {
          id: 6,
          title: '故宫',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
        },
        {
          id: 7,
          title: '一日游',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: 8,
          title: '公园',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png'
        },
        {
          id: 9,
          title: '游乐场',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
        },
        {
          id: 10,
          title: '全部玩乐',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
        }

      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.navList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 设置下标
        if (!pages[page]) { // 不存在就为空
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss">
    @import 'assets/styles/mixins.scss';
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: rgba(255,255,255,1);
    }
    .swiper-pagination-bullet{
      background: #aba3a3
    }
    .nav__icons .swiper-wrapper{
        height: 3.9rem;
        margin-top: 0.1rem;
        .swiper-slide{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .icon{
            width: 25%;
            height: 50%;
            overflow: hidden;
            box-sizing: border-box;
            .imgbox{
                display: block;
                margin: 0.2rem auto;
                width: 1.1rem;
                height: 1.1rem;
                margin-bottom:0.1rem;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                }
            }
            span{
                display: block;
                text-align: center;
                line-height: 0.44rem;
                @include ellipsis;
            }
        }
    }
</style>

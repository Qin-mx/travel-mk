<template>
    <div class="user__reviews">
        <h3 class="title">用户评论</h3>
        <ul class="user_list">
            <li class="border-top items" v-for="item in List" :key="item.id">
                <p class="user_list-start">
                    <stars></stars>
                    <span class="starts">{{item.name}}&nbsp;&nbsp;{{item.date}}</span>
                </p>
                <p class="user_list-content" ref="content" :style="item.height">
                     {{item.text}}
                </p>
                <p :class="['user_list-arrow',{'arrow_rotate': !item.istextHide} ]" v-if="item.islength" @click="handleOpentext(item)"><i class="iconfont icon-jiantou"></i></p>

                <!-- 图片 -->
                <ul class="user_list-img" v-if="item.imgurl.length">
                    <li v-for="img in item.imgurl" :key="img.id">
                        <img :src="img.imgUrl" alt="" @click="openImgList(item)">
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Stars from 'components/Stars'
export default {
  name: 'UserReviews',
  components: {
    Stars
  },
  data () {
    return {
      List: [
        {
          id: 1,
          start: 5,
          name: 'h*4',
          date: '2017-09-03',
          text: '我这是第二天来看熊猫，因为阴天天又相对比较凉，熊猫的数量比昨天要多了一点，但是他们都太远处是去吃竹子，所以不好拍照，反正想近距离的拍照行吗还是挺有难度的小熊猫也是在远处睡觉，能不能拍到要看自己的运气了？',
          imgurl: [
            {
              id: 1,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/a5/c92e2b40f06ab502.jpg_228x168_0298f3e4.jpg'
            }, {
              id: 2,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/eb/d66b734c1d232b02.jpg_228x168_017f987f.jpg'
            },
            {
              id: 3,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/5e/5455c9d6229ec502.jpg_228x168_c299eef6.jpg'
            }, {
              id: 4,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/11/ad99d8f4ac858402.jpg_228x168_acf96771.jpg'
            }, {
              id: 5,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/9e/5ad9aa6436244202.jpg_228x168_d13fb5b4.jpg'
            },
            {
              id: 6,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/6c/65dd90c9976d2402.jpg_228x168_f9d496fa.jpg'
            }

          ]
        },
        {
          id: 2,
          start: 5,
          name: 'r*4',
          date: '2017-09-03',
          text: '必须上午进园！必须上午进园！！必须上午进园！！！重要的事情说三遍！中午过后熊猫很少出来活动，这一点售票的人不会告诉你。我们去的那天差不多午饭时间，于是在大门外的农家乐吃完午饭才进园，那天天气比较热，所有的大熊猫都躲在室内休息，里面的保安告诉我们这个时候是看不到熊猫的。难道80元的门票就这样打水漂？好在我没有放弃，一直走到最里面终于看到两只大熊猫被粗心的饲养员关在了室外，可怜兮兮地守着铁闸向里望。后来又欣喜地看到两只淘气的小熊猫顶着大太阳在外面玩耍，很是可爱。这里没有熊猫BB，想看BB建议去成都的熊猫基地。个人觉得这里完全不值这么贵的门票，我们加起来待了不到半小时，总共看到4只熊猫。我是在售票处现上网预订的网票，换票等了5分钟左右，很方便。',
          imgurl: [
            {
              id: 1,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/6e/3397dbb00e19b502.jpg_228x168_b0c81afe.jpg'
            }, {
              id: 2,
              imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/d0/fb5a86b05a492702.jpg_228x168_14317bb0.jpg'
            } ]
        }
      ]
    }
  },
  created () {
    this.List.forEach(v => {
      v.istextHide = false
      v.height = {
        height: 'auto',
        overflow: 'hidden'
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.content.forEach((v, i) => {
        if (v.clientHeight > 105) {
          this.List.splice(i, 1, {
            islength: true,
            istextHide: true,
            height: {
              height: '100px',
              overflow: 'hidden'
            },
            id: this.List[i].id,
            start: this.List[i].start,
            name: this.List[i].name,
            date: this.List[i].date,
            text: this.List[i].text,
            imgurl: this.List[i].imgurl
          })
        }
      })
    })
  },
  methods: {
    handleOpentext (item) {
      item.istextHide = !item.istextHide
      let newHeight = {
        height: '100px',
        overflow: 'hidden'
      }
      let oldHeight = {
        height: 'auto',
        overflow: 'hidden'
      }
      item.height = item.istextHide ? newHeight : oldHeight
    },
    openImgList (val) {
      this.$emit('openImgList', val.imgurl, true)
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/styles/theme.scss';
.user__reviews{
    margin:0.1rem 0;
    background: #fff;
    .title{
        height: .88rem;
        line-height: .88rem;
        color: $bg;
        font-size: 0.32rem;
        padding: 0 0.2rem;
    }
    .user_list{
        padding: 0 0.2rem;
        font-size: 0.24rem;
    }
    .items{
        padding: 0.2rem 0;
    }
    .user_list-start{
        padding: 0.1rem 0;
        line-height: .6rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }
    .user_list-content{
        font-size: 0.26rem;
        line-height: .4rem;
        color: #616161;
        word-break: break-all; // 处理单词
        word-wrap: break-word;
        overflow: hidden;
    }
    .user_list-arrow{
        height: 0.32rem;
        text-align: center;
        i{
            display: inline-block;
            transform: rotate(90deg);
        }
        &.arrow_rotate{
            i{
              display: inline-block;
              transform: rotate(-90deg);
            }

        }
    }
    .user_list-img{
        margin: .2rem 0 .1rem 0;
        position: relative;
        zoom: 1;
        overflow: hidden;
        li{
            float: left;
            margin: 0 0.07rem .1rem;
            width: 31.3%;
            box-sizing: border-box;
            img{
                width: 100%;
                background-size: contain
            }
        }
    }
}
</style>

<template>
    <div>
        <div class="desc__header">
            <div class="desc__img" @click="handleImgFull">
                <img src="http://img1.qunarzz.com/sight/p0/1705/f9/f9c6de66e80d6b95a3.img.jpg_600x330_2e8f3cad.jpg" alt="">
            </div>
            <div class="desc__img-wrap">
                <i class="iconfont icon-tupian"></i>
                <em>23</em>
            </div>
            <div class="desc__img-text">俄么塘花海</div>
            <!-- 返回按钮 -->
            <div class="desc__back" :style="opacity" v-if="!isbgColor">俄么塘花海</div>
            <router-link to="/">
                <div class="desc__font-bg" :class="{'desc__font-bg-bg':isbgColor}">
                    <i class="iconfont icon-jiantou" :style="opacityIcon"></i>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Headerdesc',
  data () {
    return {
      opacity: {
        opacity: 0
      },
      opacityIcon: {
        opacity: 1
      },
      isbgColor: true,
      swiperSlides: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/79/79bcc3516bcce92aa3.img.jpg_350x240_6e1f4f45.jpg'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/15/15c6f7f9522bf6aa3.img.jpg_350x240_0998c40e.jpg'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/c6/c636480f147bbfe4a3.img.jpg_350x240_518e8fba.jpg'
        },
        {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/52/52cfce86ee5fc651a3.img.jpg_350x240_9c462892.jpg'
        },
        {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f2/f2693809a4f6c877a3.img.jpg_350x240_ff3f6868.jpg'
        },
        {
          id: 6,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/87/87af14e4b02a3ee9a3.img.jpg_350x240_9d761ee6.jpg'
        },
        {
          id: 7,
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/eb/d66b734c1d232b02.jpg'
        },
        {
          id: 8,
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1706/d7/a1496dbed9a6bf02.jpg'
        }
      ]
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    this.isbgColor = true
  },
  methods: {
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
    handleImgFull () {
      this.$emit('openImgList', this.swiperSlides, true)
      this.isbgColor = true
      this.opacity = {
        opacity: 0
      }
      this.opacityIcon = {
        opacity: 1
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/styles/theme.scss';
.desc__header{
    position: relative;
}
.desc__img{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom:55%;
    img{
        width: 100%;
    }
}
.desc__img-wrap{
    position: absolute;
    left: .2rem;
    bottom: .86rem;
    color: #fff;
    background:rgba(0,0,0,0.5);
    padding:0.1rem 0.15rem;
    border-radius: 12px;
    i,em{
        vertical-align: middle;
    }
}
.desc__img-text{
    position: absolute;
    bottom: .36rem;
    left: .2rem;
    right: .2rem;
    min-height: .4rem;
    line-height: .4rem;
    font-size: 0.36rem;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
}
.desc__back{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    height:$headerheight;
    line-height: $headerheight;
    background: $bg;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
    z-index: 9;
}
.desc__font-bg{
    width: 0.72rem;
    height: 0.72rem;
    color: #fff;
    border-radius: 50%;
    line-height: .72rem;
    text-align: center;
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
     z-index: 9;
}
.desc__font-bg-bg{
    background:rgba(0,0,0,0.5);
}
i{
    display: inline-block;
    font-weight: bold;
    transform: rotate(-180deg);
}
</style>

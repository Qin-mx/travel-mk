<template>
    <div>
        <swiper :options="swiperOption" class="wrapper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
              <img :src="slide.imgUrl" :alt="slide.title">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'HomeSwiper',
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
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      swiperSlides: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg',
          title: '去哪儿门票'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg',
          title: '去哪儿门票'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg',
          title: '去哪儿门票'
        },
        {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg',
          title: '去哪儿门票'
        },
        {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/e0/b59ec01d6992e202.jpg_750x200_db9cc3d8.jpg',
          title: '去哪儿门票'
        },
        {
          id: 6,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/c5/8f384b861e4e9e02.jpg_750x200_29d574ba.jpg',
          title: '去哪儿门票'
        },
        {
          id: 7,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/ec/278a34afb59a0d02.jpg_750x200_3292a705.jpg',
          title: '去哪儿门票'
        },
        {
          id: 8,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg',
          title: '去哪儿门票'
        }
      ]
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>

 img{
   width: 100%;
 }
</style>

<style lang="scss">
 .wrapper{
   width: 100%;
   overflow: hidden;
   height:0;
   padding-bottom:26.6%;
   .swiper-pagination-bullet-active {
    opacity: 1;
    background: rgba(255,255,255,1);
  }
  .swiper-pagination-bullet{
    background: rgb(255,255,255)
  }
 }
</style>

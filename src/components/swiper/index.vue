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
  props: {
    swiperSlides: {
      type: Array
    }
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
      }
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

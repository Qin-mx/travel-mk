<template>
    <div>
        <div class="qn-desc" v-if="!showImgList">
            <!-- 头部图片 -->
            <header-desc @openImgList="openImgList"></header-desc>
            <!-- 详情介绍 -->
            <baseinfo></baseinfo>
            <!-- 列表页 -->
            <list-desc></list-desc>
            <!-- 用户评论 -->
            <user-reviews @openImgList="openImgList"></user-reviews>
        </div>
        <img-list v-else @closeImgList="closeImgList" :swiperSlides="swiperSlides"></img-list>
    </div>
</template>

<script>
import HeaderDesc from './components/desc/Headerdesc.vue'
import Baseinfo from './components/desc/Baseinfo.vue'
import ListDesc from './components/desc/ListDesc.vue'
import ImgList from './components/desc/ImgList.vue'
import UserReviews from './components/desc/UserReviews.vue'
export default {
  name: 'DescPage',
  components: {
    HeaderDesc,
    Baseinfo,
    ListDesc,
    ImgList,
    UserReviews
  },
  data () {
    return {
      showImgList: false,
      swiperSlides: []
    }
  },
  methods: {
    openImgList (val, flag) {
      this.showImgList = flag
      this.swiperSlides = val
    },
    closeImgList (val) {
      this.showImgList = val
    }
  }
}
</script>

<style scoped lang="scss">
.qn-desc{
    background: #f5f5f5
}
</style>

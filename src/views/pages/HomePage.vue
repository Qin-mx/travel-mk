<template>
    <div>
      <!-- 头部 -->
        <header-com></header-com>
        <!-- 轮播图 -->
        <header-swiper></header-swiper>
        <!-- 分类导航 -->
        <nav-icon></nav-icon>
        <!-- 定位失败 -->
        <ul class="list-con">
          <li class="item">
            <i class="iconfont icon-htmal5icon14"></i>定位失败
          </li>
          <li class="item">
            <i class="iconfont icon-wanggediqiu"></i>玩水季
          </li>
        </ul>
        <!-- 人气榜单 -->
        <hot-listmap></hot-listmap>
        <!-- 猜你喜欢 -->
        <guess-like></guess-like>
        <!-- 周末去哪 -->
        <weekend-list></weekend-list>
    </div>
</template>

<script>
import HeaderCom from './components/HeaderCom'
import HeaderSwiper from 'components/swiper'
import NavIcon from 'components/navIcon'
import HotListmap from './components/HotListmap'
import GuessLike from './components/GuessLike.vue'
import WeekendList from './components/WeekendList.vue'
export default {
  name: 'homepage',
  components: {
    HeaderCom,
    HeaderSwiper,
    HotListmap,
    GuessLike,
    WeekendList,
    NavIcon
  },
  data () {
    return {
      key: 'value'
    }
  }
}
</script>
<style lang="scss" scoped>
.list-con{
  border-top: 1px solid#f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
  .item{
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    text-align: center;
    &:nth-child(1){
      border-right:1px solid#f1f1f1;
    }
    .iconfont{
      font-size: 0.32rem;
      color: rgb(167, 161, 161);
    }
  }
}
</style>

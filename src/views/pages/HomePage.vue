<template>
    <div>
        <header-com></header-com>
        <header-swiper></header-swiper>
        <nav-icon></nav-icon>
        <p>{{key}}</p>
    </div>
</template>

<script>
import HeaderCom from './components/HeaderCom'
import HeaderSwiper from 'components/swiper'
import NavIcon from 'components/navIcon'
export default {
  name: 'homepage',
  components: {
    HeaderCom,
    HeaderSwiper,
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
</style>

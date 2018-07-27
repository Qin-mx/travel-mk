<template>
    <div>
        <header-com></header-com>
        <header-swiper></header-swiper>
        <p>{{key}}</p>
    </div>
</template>

<script>
import HeaderCom from './components/HeaderCom'
import HeaderSwiper from 'components/swiper'
export default {
  name: 'homepage',
  components: {
    HeaderCom,
    HeaderSwiper
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

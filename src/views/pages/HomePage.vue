<template>
    <div>
        <header-com></header-com>
        <p>{{key}}</p>
    </div>
</template>

<script>
import HeaderCom from './components/HeaderCom'
export default {
  name: 'homepage',
  components: {
    HeaderCom
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

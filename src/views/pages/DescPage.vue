<template>
    <div class="qn-desc">
        <!-- 头部图片 -->
        <header-desc></header-desc>
        <!-- 详情介绍 -->
        <baseinfo></baseinfo>
        <!-- 列表页 -->
        <list-desc></list-desc>
    </div>
</template>

<script>
import HeaderDesc from './components/desc/Headerdesc.vue'
import Baseinfo from './components/desc/Baseinfo.vue'
import ListDesc from './components/desc/ListDesc.vue'
export default {
  name: 'DescPage',
  components: {
    HeaderDesc,
    Baseinfo,
    ListDesc
  }
}
</script>

<style scoped lang="scss">
.qn-desc{
    background: #f5f5f5
}
</style>

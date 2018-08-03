<template>
        <span class="start-box">
            <i class="iconfont icon-xingxing on"></i>
            <i class="iconfont icon-xingxing on"></i>
            <i class="iconfont icon-xingxing on"></i>
            <i class="iconfont icon-xingxing on"></i>
            <i class="iconfont icon-xingxing on"></i>
        </span>
</template>

<script>
export default {
  name: 'stars'

}
</script>

<style scoped lang="scss">
.start-box{
        position: relative;
        top: -1px;
        margin-right: 0.1rem;
        line-height: 0.34rem;
        .iconfont{
            font-size: 0.24rem;
            float: left;
            color: #e0e0e0;
            &.on{
                color: #ffb436
            }
        }
}
</style>

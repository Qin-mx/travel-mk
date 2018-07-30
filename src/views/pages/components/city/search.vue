<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'assets/styles/theme.scss';
    .search{
        height: 0.72rem;
        padding: 0 .1rem;
        background:$bg;
        .search-input{
            width: 100%;
            height: 0.62rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem;
            color: #666;
            padding: 0 0.1rem;
            box-sizing: border-box;
        }
    }
</style>

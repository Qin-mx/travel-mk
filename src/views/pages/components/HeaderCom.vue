<template>
    <div>
        <header class="header">
            <router-link to="/">
                <div class="header-left">
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </router-link>
            <div class="header-content">
                <i class="iconfont icon-sousuo"></i>
                <span>输入城市/景点/游玩主题</span>
            </div>
            <div class="header-right">
                <router-link to="/city">
                    <span>城市</span>
                    <i class="iconfont icon-sanjiao"></i>
                </router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
    @import 'assets/styles/theme.scss';
    .header{
        display: flex;
        flex-direction: row;
        height: $headerheight;
        line-height: $headerheight;
        background: $bg;
        color: #fff;
        .icon{
            font-size:12px;
        }
        .header-left{
            width: 0.4rem;
            padding:0 0.2rem;
            text-align: center;
            .icon-jiantou{
                display: inline-block;
                transform: scale(1.1) rotate(180deg);
            }
        }
        .header-content{
            flex:1;
            margin:0.14rem 0;
            width: 100%;
            line-height: 0.60rem;
            border-radius: 2px;
            background: #fff;
            span{
                color: #bfc3bf;
            }
            .icon-sousuo{
                display: inline-block;
                transform: scale(1.2);
                color: #bfc3bf;
                margin: 0 0.04rem 0 0.06rem;
                font-weight: bold;
            }
        }
        .header-right{
            padding: 0 0.22rem;
            width: 0.84rem;
            position: relative;
            .icon-sanjiao{
                display: inline-block;
                transform: scale(0.5);
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
</style>

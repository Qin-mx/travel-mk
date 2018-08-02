<template>
    <div class="hot__list">
        <div class="hot_list_bg">
            <div class="title">
                <h3><i class="iconfont icon-icon-test"></i>本周热门榜单</h3>
                <!-- <span>全部榜单</span> -->
            </div>
            <div class="flex_wrap">
                <div class="hot__list-item" v-for="item in hotListmap" :key="item.id">
                    <div class="img_box">
                        <img v-if="item.tips" :src="item.tips" :alt="item.title" class="hot_tips">
                        <img :src="item.url" :alt="item.tips">
                    </div>
                    <p class="img_desc">{{item.title}}</p>
                    <p class="img_price">
                        <em>&yen;{{item.price}}</em>起
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['hotListmap']
}
</script>

<style scoped lang="scss">
    @import 'assets/styles/mixins.scss';
    .icon-icon-test{
        color:#ff8a43;
    }
    .hot__list{
        background: #f5f5f5;
        padding: 0.2rem 0;
        .hot_list_bg{
            background: #fff;
            .title{
                padding:0.24rem 0 0.26rem;
                font-size:0.32rem;
                height: 0.44rem;
                line-height: 0.44rem;
                color: #212121;
                display: flex;
                flex-direction: row;
                justify-content:space-between;
                h3{
                    margin-left:0.3rem;
                }
                span{
                    color: #616161;
                    font-size:0.24rem;
                    margin-right: 0.3rem;
                }
            }
            .flex_wrap{
                white-space: nowrap;
                overflow-x:auto;
                overflow-y: hidden;
            }
            .hot__list-item{
                display: inline-block;
                margin: 0 0.1rem 0 0;
                width: 2rem;
                text-align: center;
                color: #212121;
                font-size:0.24rem;
                &:first-child{
                    margin-left: 0.3rem;
                }
                .img_box{
                    position: relative;
                    width: 2rem;
                    height: 2rem;
                    margin: 0.1rem 0.1rem 0.1rem 0;
                    .hot_tips{
                        position: absolute;
                        left: -2px;
                        top: -2px;
                        width: 0.84rem;
                        height: 0.4rem;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .img_desc,.img_price{
                    line-height: 0.4rem;
                    @include ellipsis;
                }
                .img_price{
                    font-size: 0.27rem;
                    em{
                        color: #de4810;
                    }
                }
            }
        }
    }
</style>

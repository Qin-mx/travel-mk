<template>
    <div class="guess_like">
        <div class="title">
            <h3><i class="iconfont icon-xinheart118"></i>猜你喜欢</h3>
        </div>

        <div class="guess_like_list" v-for="item in LikeList" :key="item.id">
            <div class="guess_like_list-img">
                <div v-if="item.tag" class="like-tag" :style="'background-image:url('+item.tag+')'">{{item.tagtips}}</div>
                <img :src="item.url" :alt="item.text">
            </div>
            <div class="guess_like_list-desc">
                <p class="text">{{item.text}}</p>
                <p class="start">
                    <span class="start-box">
                        <span>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                        </span>
                        <span class="start-background">
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                            <i class="iconfont icon-xingxing"></i>
                        </span>
                    </span>
                    <span>{{item.comment}}条评论</span>
                </p>
                <div class="info">
                    <p class="price">
                        <span>&yen;<em>{{item.price}}</em></span>
                        起
                    </p>
                    <p class="address">{{item.address}}</p>
                </div>

                <p class="guess_like_list-add" v-if="item.add">
                    {{item.add}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    LikeList: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
 @import 'assets/styles/mixins.scss';
 .title{
    padding:0.24rem 0 0.26rem;
    font-size:0.32rem;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #212121;
        h3{
            margin-left:0.3rem;
        }
    }
     .icon-xinheart118{
        color:#ff8a43;
        font-size:0.24rem;
    }
.guess_like_list{
    display: flex;
    flex-direction: row;
    border-bottom:1px solid #f1f1f1;
    padding: 0.2rem 0.3rem;
    .guess_like_list-img{
        position: relative;
        width: 2rem;
        height: 2rem;
        img{
            width: 100%;
            height: 100%;
        }
        .like-tag{
            position: absolute;
            top: 0;
            left: 0;
            width: 1.02rem;
            height: .39rem;
            font-size: 0.24rem;
            line-height: 0.39rem;
            color: #fff;
            text-align: center;
            background-size: 100%;
             @include ellipsis;
        }
    }
    .guess_like_list-desc{
        padding-left: 0.2rem;
        flex: 1;
        .text{
            width: 5rem;
            margin-top: .26rem;
            height: .44rem;
            color: #212121;
            font-size: .32rem;
            line-height: .44rem;
            @include ellipsis;
        }
        .start{
            margin-top: 0.14rem;
            height: .34rem;
            span:last-child{
                display: inline-block;
                width: 2.2rem;
                line-height: 0.34rem;
                color:#616161;
                @include ellipsis;
            }
        }
        .info{
            display: flex;
            justify-content: space-between;
            margin-top: 0.22rem;
            font-size:0.24rem;
            color: #616161;
            .price{
                vertical-align: bottom;
                span{
                    color: orangered;
                    em{
                        font-size:0.4rem;
                    }
                }
            }
            .address{
                line-height: .44rem;
            }

        }
    }
    .guess_like_list-add{
        width: 5rem;
        @include ellipsis;
        display: inline-block;
        margin-top:.44rem;
        background: #fff9f9;
        font-size: 0.24rem;
        color: #f55;
        line-height: 0.44rem;
    }
    .start-box{
        position: relative;
        top: -3px;
        margin-right: 0.1rem;
        width: 100%;
        .start-background{
            position: absolute;
            left: 0;
            top: -1px;
            color: #ffb436 !important;
        }
    }
}
</style>

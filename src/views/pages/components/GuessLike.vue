<template>
    <div class="guess_like">
        <div class="title">
            <h3>猜你喜欢</h3>
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
                        <span></span>
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
  data () {
    return {
      LikeList: [
        {
          id: 1,
          tag: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
          tagtips: '随买随用',
          url: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
          text: '北京国际鲜花港',
          start: '5',
          comment: '18235',
          price: '29.9',
          address: '丰台区'
        },
        {
          id: 2,
          tag: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
          tagtips: '随买随用',
          url: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
          text: '远去的恐龙',
          start: '5',
          comment: '422',
          price: '140',
          address: '朝阳区'
        },
        {
          id: 3,
          tag: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
          tagtips: '随买随用',
          url: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          text: '北京欢乐谷',
          start: '5',
          comment: '55483',
          price: '66.6',
          address: '朝阳区',
          add: '👍小伙伴们都收藏了，去看看吧~'
        },
        {
          id: 4,
          tag: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
          tagtips: '可定明天',
          url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          text: '故宫',
          start: '5',
          comment: '249897',
          price: '20',
          address: '东城区',
          add: '🔥好评如潮，小伙伴热推景点~'
        },
        {
          id: 6,
          tag: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
          tagtips: '随买随用',
          url: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          text: '北京动物园',
          start: '5',
          comment: '47770',
          price: '39.9',
          address: '西城区',
          add: '百余种动物，让你离自然更近'
        }
      ]
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
}
</style>

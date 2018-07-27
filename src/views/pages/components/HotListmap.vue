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
  data () {
    return {
      hotListmap: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
          title: '故宫',
          tips: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
          price: 20
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg',
          title: '八达岭长城',
          tips: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
          price: 25
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg',
          title: '水立方',
          tips: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
          price: 35
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg',
          title: '十渡聚龙湾玻璃栈道',
          price: 35
        },
        {
          id: 5,
          url: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_150x150_2747e538.jpg',
          title: '颐和园',
          price: 20
        },
        {
          id: 6,
          url: 'http://img1.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_150x150_35b4b15f.jpg',
          title: '八达岭长城缆车',
          price: 160
        },
        {
          id: 7,
          url: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_150x150_27594131.jpg',
          title: '北京欢乐谷',
          price: 66.6
        },
        {
          id: 8,
          url: 'http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg',
          title: '定陵',
          price: 250
        },
        {
          id: 9,
          url: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_150x150_2a3c9117.jpg',
          title: '圆明园',
          price: 10
        },
        {
          id: 10,
          url: 'http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_150x150_ba1070d2.jpg',
          title: '北京欢乐水魔方',
          price: 111
        }
      ]
    }
  }
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

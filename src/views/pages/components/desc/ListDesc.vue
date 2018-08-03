<template>
    <div class="desc__list">
        <h3 class="title">门票</h3>
        <ul>
            <li class="border-top" v-for="item in list" :key="item.id">
                <div class="desc__list-item"  @click="handleShowDesc(item)">
                    <p class="ellipsis2">{{item.title}}</p>
                    <div class="price">
                        <span class="price-color">&yen;<span>76</span><em>起</em></span>
                        <i class="iconfont icon-jiantou" :class="{'roate':item.show}"></i>
                    </div>
                </div>
                <ul class="desc__list-table" v-if="item.show">
                    <li class="border-bottom" v-for="item in item.list" :key="item.id">
                        <div class="lxtd">
                            <h5 class="ellipsis2">{{item.desc}}</h5>
                            <p class="kdmr">可定明日</p>
                            <p class="tjth">条件退 <span class="border">赠券&yen;2.0</span></p>
                            <p class="lygs">
                                <span>{{item.lxs}}</span>
                                <span class="border-left ydxz">预订须知<i class="iconfont icon-jiantou"></i></span>
                            </p>
                        </div>
                        <div class="price">
                            <p>&yen;<span>76</span></p>
                            <div class="btn">预定</div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'ListDesc',
  data () {
    return {
      list: [
        {
          id: 1,
          title: '卧龙中华大熊猫苑神树坪基地成人票',
          show: false,
          list: [
            {
              id: 1,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 6,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 2,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 3,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 4,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 5,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            }
          ]
        },
        {
          id: 2,
          title: '卧龙中华大熊猫苑神树坪基地优待票',
          show: false,
          list: [
            {
              id: 1,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 6,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 2,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 3,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 4,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            },
            {
              id: 5,
              title: '卧龙中华大熊猫苑神树坪基地成人票',
              desc: '【极速出票、自动发码】卧龙中华大熊猫苑神树坪基地-成人票',
              lxs: '趣远行'
            }
          ]
        }

      ]
    }
  },
  methods: {
    handleShowDesc (val) {
      val.show = !val.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/theme.scss';
.desc__list{
    margin:0.1rem 0;
    background: #fff;
    .title{
        height: .88rem;
        line-height: .88rem;
        color: $bg;
        font-size: 0.32rem;
            padding: 0 0.2rem;
    }
    & > ul>li{
        position: relative;
        z-index: 2;
        margin-bottom: -.02rem;
        padding: .24rem .2rem;
        background: #fff;
    }
    .desc__list-item{
        position: relative;
        p{
            &:first-child{
                width: calc( 100% - 1.8rem);
                color: #333;
                font-size: .3rem;
                line-height: .48rem;
            }
        }
        .price{
            position: absolute;
            top: 50%;
            right: 0;
            height: 0.4rem;
            line-height: 0.4rem;
            transform: translateY(-50%);
            .price-color{
                color:#ff8300;
                font-size: 0.24rem;
                span{
                    font-size: 0.32rem;
                    vertical-align: bottom;
                    font-weight: 700;
                    margin:0 0.1rem 0 0;
                }
                em{
                    color: #cccccc;
                }
            }
            .iconfont{
                display: inline-block;
                transform: rotate(-90deg);
                font-size: 0.24rem;
                font-weight: bold;
                transition: all 0.1s ease-in;
            }
            .roate{
                transform: rotate(90deg);
            }

        }

    }
    .desc__list-table{
        padding:0.2rem;
        position: relative;
        left: -0.2rem;
        top: 0.2rem;
        width: 100%;
        background: #f5f5f5;
        li{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            padding:0.2rem 0;
        }
        .lxtd{
            flex: 3;
            h5{
                color: #616161;
                font-size: .28rem;
                line-height: .4rem;
            }
            .kdmr,.lygs,.tjth{
                height: .32rem;
                color: #616161;
                font-size: .24rem;
                line-height: .32rem;
                white-space: nowrap;
                margin-bottom:0.04rem;
            }
            .tjth{
                color: $bg;
                span{
                    color: #fb5454;
                    padding:0.02rem 0.05rem;
                    &::before{
                        border-color: #ffb2b2;
                    }
                }
            }
            .lygs{
                .iconfont{
                     color: #616161;
                     font-size:0.24rem;
                }
            }
        }
        .price{
            flex: 1;
            text-align: center;
            p{
                color: #ff8300;
                span{
                    font-size: .4rem;
                    line-height: 1;
                }
            }
            div{
                height: .6rem;
                line-height: .6rem;
                color: #fff;
                font-size: .28rem;
                background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
                border-radius: 4px;
            }
        }
    }
}
</style>

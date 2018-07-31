<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrap">
                        <div class="btn">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="btn-list">
                    <div class="btn-wrap" v-for="item in hotList" :key="item.id">
                        <div class="btn">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for=" (item,key) in cityList" :key="key" :ref="key">
                <div class="title border-topbottom" >{{key}}</div>
                <ul class="city-list">
                    <li v-for="city in item" :key="city.id" @click="chooseCity(city.name)">{{city.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    hotList: {
      type: Array
    },
    cityList: {
      type: Object
    },
    letter: {
      type: String
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        let ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  methods: {
    chooseCity (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/theme.scss';
 @import 'assets/styles/mixins.scss';
 .list{
    background: #f5f5f5;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
 }
.area {
    .title{
        font-size: 0.24rem;
        padding: 0.24rem 0.3rem;
    }
    .btn-list{
        display: flex;
        flex-wrap: wrap;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        background: #fff;
        .btn-wrap{
            width: 33.3%;
            .btn{
                margin: 0.1rem;
                padding:0.1rem 0;
                text-align: center;
                border:1px solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }
    .city-list{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        li{
            width: 25%;
            line-height: 0.9rem;
            height: 0.9rem;
            font-size: .28rem;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            margin-bottom: -1px;
            text-align: center;
            @include ellipsis;
            box-sizing: border-box;
            &:nth-child(4n){
              border-right: 1px solid #fff;
            }
        }
    }
}
</style>

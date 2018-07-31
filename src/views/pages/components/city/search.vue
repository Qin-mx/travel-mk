<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" @keydown="handleList" v-model="keyword">
        </div>

        <div class="search-content" ref="wrapper" v-show="keyword">
            <ul>
                <li class="border-bottom" v-if="!list.length">当前数据不存在</li>
                <li v-for="item in list" :key="item.id" v-else class="border-bottom">{{item.name}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      keyword: '',
      timer: '',
      list: ''
    }
  },
  props: {
    cityList: {
      type: Object
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  methods: {
    handleList () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cityList) {
          this.cityList[i].forEach(v => {
            if (v.name.indexOf(this.keyword) > -1 || v.spell.indexOf(this.keyword) > -1) {
              result.push(v)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
    .search-content{
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 1.58rem;
        bottom: 0;
        background: #f3f3f3;
        ul{
            background: #ffff
        }
        li{
            font-size: 0.28rem;
            height: 0.44rem;
            line-height: 0.44rem;
            padding: 0.1rem 0.3rem;
        }
    }
</style>

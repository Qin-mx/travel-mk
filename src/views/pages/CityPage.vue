<template>
    <div>
        <header class="header-city">
            <div class="header-center">城市选择</div>
            <router-link to="/">
                <div class="header-left">
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </router-link>
        </header>

        <!-- 搜索框 -->
        <city-search :cityList="cityList"></city-search>
        <!-- 列表 -->
        <city-list :hotList="hotList" :cityList="cityList" :letter="letter"></city-list>
        <!-- 字母表 -->
        <city-alphabet :cityList="cityList" @handleCityListStatus="handleCityListStatus"></city-alphabet>
    </div>
</template>

<script>
import CitySearch from './components/city/search.vue'
import CityList from './components/city/List.vue'
import CityAlphabet from './components/city/Alphabet.vue'
export default {
  name: 'CityPage',
  components: {
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotList: [],
      cityList: {},
      letter: ''
    }
  },
  mounted () {
    this.GetCityList()
  },
  methods: {
    GetCityList () {
      let url = process.env.NODE_ENV === 'development' ? '/api/' : 'https://api.myjson.com/bins/'
      this.axios.get(url + '185fxk').then(res => {
        if (res.data.ret && res.data) {
          this.handleCityList(res)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleCityList (res) {
      this.hotList = res.data.data.hotCities
      this.cityList = res.data.data.cities
    },
    // 处理点击右侧导航
    handleCityListStatus (key) {
      this.letter = key
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/theme.scss';
.header-city{
    height: $headerheight;
    line-height: $headerheight;
    background: $bg;
    color: #fff;
    position: relative;
    .icon{
            font-size:12px;
    }
    .header-left{
        width: 0.4rem;
        padding:0 0.2rem;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        .icon-jiantou{
            display: inline-block;
            transform: scale(1.1) rotate(180deg);
        }
    }
    .header-center{
        text-align: center;
    }
}
</style>

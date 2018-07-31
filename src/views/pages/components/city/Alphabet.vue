<template>
    <ul class="list">
        <li
            class="item"
            v-for="item in letters"
            :key="item"
            @click="clickalphabet(item)"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchEnd="handleTouchEnd"
            :ref='item'
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    cityList: {
      type: Object
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: ''
    }
  },
  computed: {
    letters () {
      let letters = []
      for (var i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    clickalphabet (key) {
      this.$emit('handleCityListStatus', key)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74
          // 设置下标
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('handleCityListStatus', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/theme.scss';
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    .item{
        text-align: center;
        line-height: .44rem;
        color: $bg
    }

}
</style>

<template>
    <div class="desc__info">
      <div class="desc__info-desc">
        <div class="desc__info-start">
          <p>4.9 <span>分 很棒</span></p>
          <p class="pl">519条评论</p>
          <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="desc__info-jd">
          <p>景点简介</p>
          <p class="pl">开放时间、贴士</p>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>

      <div class="desc__info-map border-top">
        <i class="iconfont icon-htmal5icon14"></i>
        <p class="title">四川省阿坝州汶川卧龙自然保护区耿达镇中华大熊猫苑神树坪基地</p>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Baseinfo'
}
</script>

<style scoped lang="scss">
.desc__info{
  background: #ffffff;
  position: relative;
  top: -.1rem;
  padding: .1rem .2rem 0 .2rem;
  margin-bottom: .1rem;
  border-radius: .1rem .1rem 0 0;
  .desc__info-desc{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: .1rem;
    padding-bottom: .2rem;
  }
  .desc__info-start,.desc__info-jd{
    flex: 1;
    position: relative;
    .iconfont{
      font-size:0.28rem;
      font-weight: bold;
      position: absolute;
      top: .25rem;
      right: .2rem;
      color: #9e9e9e;
    }
  }
  .desc__info-start{
    p{
      &:first-child{
        color: #ff8300;
        font-size: 0.44rem;
        line-height: 0.44rem;
        span{
          font-size: 0.28rem
        }
      }
    }
  }

  .desc__info-jd{
    padding-left: 0.2rem;
    line-height: 0.42rem;
    &::before{
      content: '';
      display: inline-block;
      width: 1px;
      height: 100%;
      background: #cccc;
      position: absolute;
      left: 0;
    }
  }
  .pl{
      color: #9e9e9e;
      font-size: 0.24rem;
      line-height: 0.32rem;
  }
  .desc__info-map{
    padding-top: .1rem;
    padding-bottom: .2rem;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    position: relative;
    .iconfont{
      font-size: 0.48rem;
      color: #9e9e9e;
    }
    .icon-jiantou{
      font-size: 0.28rem;
      font-weight:bold;
      position: absolute;
      top: 50%;
      right: 0.2rem;
    }
    p{
      line-height: 1.5;
      padding:0 0.6rem 0 0;
    }
  }

}

</style>

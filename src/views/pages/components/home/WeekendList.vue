<template>
    <div class="weekend-trip">
       <h3>周末去哪儿</h3>
       <div class="weekend_list" v-for="item in weekendList" :key="item.id">
           <div class="img">
               <img :src="item.imgUrl" :alt="item.title" @click="targetdesc(item)">
           </div>
           <div class="desc">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  props: {
    weekendList: {
      type: Array
    }
  },
  methods: {
    targetdesc (item) {
      this.$router.push({name: 'DescPage', params: {id: item.id}})
    }
  }
}
</script>

<style scoped lang="scss">
    @import 'assets/styles/mixins.scss';
    .weekend-trip{
        background: #f5f5f5;
        color: #212121;
        font-size: 0.28rem;
        h3{
            padding:0.2rem 0 0.2rem 0.3rem;
            height: 0.44rem;
            line-height: 0.44rem;
        }
        .weekend_list{
            background: #fff;
            margin-bottom:0.1rem;
            .img{
                width: 100%;
                height:0;
                overflow: hidden;
                padding-bottom:37.4375%;
                img{
                    width: 100%;
                }
            }
            .desc{
                padding:0.2rem 0.3rem;
                p{
                    @include ellipsis;
                    height: 0.44rem;
                    line-height: 0.44rem;
                    &:last-child{
                        color: #616161;
                        font-size:0.24rem;
                    }
                }

            }
        }
    }
</style>

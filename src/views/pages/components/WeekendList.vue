<template>
    <div class="weekend-trip">
       <h3>周末去哪儿</h3>
       <div class="weekend_list" v-for="item in weekendList" :key="item.id">
           <div class="img">
               <img :src="item.url" :alt="item.name">
           </div>
           <div class="desc">
                <p>{{item.name}}</p>
                <p>{{item.desc}}</p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      weekendList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          name: '漂流勇进，烧烤露营',
          desc: '轻松水上漂，任我乐逍遥'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          name: '北京清凉避暑胜地',
          desc: '到大自然中享受“天然空调”的清凉'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          name: '北京必游TOP10',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          name: '寻找北京的皇城范儿',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: 5,
          url: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          name: '北京学生最爱的博物馆',
          desc: '周末干嘛？北京很多博物馆已经免费开放啦'
        }
      ]
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

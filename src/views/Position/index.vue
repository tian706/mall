<template>
    <div class='position'>
        <go-login></go-login>
        <ul>
            <router-link :to="{
                name:'detail',
                params:{
                    id:item.positionId
                },
                query:{
                    positionName:item.positionName,
                    salary:item.salary,
                    city:item.city,
                    companyName:item.companyName,
                    companyLogo:item.companyLogo
                }
            }" v-for='(item,index) in positionData' :key='index'>
                <div class='logo'>
                    <img :src="'https://www.lgstatic.com/'+item.companyLogo">
                </div>
                <div class='text'>
                    <p class='companyName'> {{item.companyName}} </p>
                    <p class='positionName'> {{item.positionName}} </p>
                    <p class='time'> {{item.createTime}} </p>
                </div>
                <div class='salary'> {{item.salary}} </div>
            </router-link>
        </ul>
        <div class='more' @click='loginMore()'>加载更多</div>
    </div>
</template>

<script>

import goLogin from '../../components/goLogin'
import {mapState,mapMutations} from 'vuex'
export default {
    components:{
        goLogin
    },
    mounted() {
        this.$store.dispatch('getData')
    },
    computed:{
        ...mapState(['positionData'])
    },
    methods:{
        //加载更多请求
        ...mapMutations(['addPage','change']),
        loginMore() {
            this.addPage()
            this.$store.dispatch('getData')
            this.change()
        }
    }
}
</script>

<style lang="scss" scoped>
   .position{
      overflow:scroll;
      ul{
          a{
              height:0.91rem;
              border-bottom:1px solid #e8e8e8;
              padding:0.14rem;
              box-sizing:border-box;
              align-items:center;
              display:flex;
              .logo{
                  width:0.6rem;
                  height:0.6rem;
                  img{
                      width:100%;
                      display:block;
                  }
              }
              .text{
                  flex:1;
                  margin-left:0.2rem;
                  p{
                      margin-bottom:0.1rem;
                  }
                  .companyName{
                      font-size:0.16768rem;
                      color:#333
                  }
                  .positionName{
                      font-size:0.12576rem;
                      color:#333;
                  }
                  .time{
                      font-size:0.12rem;
                      color:gray;
                  }
              }
              .salary{
                  font-size:0.16768rem;
                  color:#00b38a;
              }
          }
      }
      .more{
          width:100%;
          height:0.5rem;
          font-size:0.1572rem;
          text-align:center;
          line-height:0.5rem;
          background:#fafafa
      }
   }
</style>
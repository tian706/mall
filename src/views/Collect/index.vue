<template>
  <div class="collect">
    <header>
      <van-icon name="arrow-left" @click="back" />
      <h1>我的收藏</h1>
      <van-icon name="wap-home-o" @click="home" />
    </header>
    <ul>
        <router-link v-for='(item,index) in this.$store.state.collectData' :key='index' :to="{
            name:'detail',
            params:{
                id:item.id
            },query:{
                companyName:item.companyName,
                companyLogo:item.companyLogo,
                city:item.city,
                positionName:item.positionName,
                salary:item.salary
            }
        }">
            <div class='logo'>
                <img :src="'https://www.lgstatic.com/'+item.companyLogo">
            </div>
            <div class='item'>
                <h2>{{item.companyName}}</h2>
                <p> {{item.positionName}} 
                    <span>[{{item.city}}]</span>
                </p>
            </div>
            <div class='salary'>
                <van-icon name="star" />
                <span>{{item.salary}}</span>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    home() {
      this.$router.push("/position");
    }
  }
};
</script>


<style lang="scss" scoped>
.collect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 10;
    header{
        width:100%;
        height:0.46rem;
        background:#00b38a;
        box-sizing:border-box;
        padding:0 0.15rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        h1{
            font-size:0.18864rem;
            color:white;
            flex:1;
            text-align:center;
        }
        i{
            font-size:0.2rem;
            color:white;
        }
    }
    ul{
        width:100%;
        a{
            width:100%;
            height:0.93rem;
            border-bottom:1px solid #e8e8e8;
            padding:0.14rem;
            box-sizing:border-box;
            display:flex;
            align-items:center;
            .logo{
                width:0.6rem;
                height:0.6rem;
                border-radius:50%;
                img{
                    display:block;
                    width:100%;
                    border-radius:50%;
                }
            }
            .item{
                flex:1;
                h2{
                    font-size:0.16768rem;
                    color:#333;
                    margin-bottom:0.1rem;
                }
                p{
                    font-size:0.12576rem;
                    color:#333;
                }
            }
            .salary{
                display:flex;
                flex-direction:column;
                align-items:center;
                span{
                    font-size:0.16768rem;
                    color:#00b38a;
                    margin-top:0.1rem;
                }
                i{
                    font-size:0.16768rem;
                    color:orange;
                }
            }
        }
    }
}
</style>
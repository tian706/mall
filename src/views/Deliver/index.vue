<template>
  <div class="deliver">
    <header>
      <van-icon name="arrow-left" @click="back" />
      <h1>投递记录</h1>
      <van-icon name="wap-home-o" @click="home" />
    </header>
    <ul>
        <li v-for='(item,index) in list' :key='index' :class='{current:currentIndex===index}' @click='changeCurrentIndex(index)'> {{item}} </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return{
            list:['全部','邀约面试','不合适'],
            currentIndex:0
        }
    },
    methods:{
        back() {
            this.$router.back()
        },
        home() {
            this.$router.push('/position')
        },
        changeCurrentIndex(index) {
            this.currentIndex = index
        }
    }
}
</script>


<style lang="scss" scoped>
.deliver {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 10;
  header {
    width: 100%;
    height: 0.46rem;
    background: #00b38a;
    box-sizing: border-box;
    padding: 0 0.15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 0.18864rem;
      color: white;
      flex: 1;
      text-align: center;
    }
    i {
      font-size: 0.2rem;
      color: white;
    }
  }
  ul{
      width:100%;
      height:0.435rem;
      border-bottom:1px solid #e8e8e8;
      display:flex;
      li{
          height:100%;
          flex:1;
          font-size:0.14672rem;
          text-align:center;
          line-height:0.435rem;
      }
  }
}
.current{
    background:#f5f5f5;
    color:#00b38a;
}
</style>
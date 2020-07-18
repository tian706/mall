<template>
  <div class="invite">
    <header>
      <van-icon name="arrow-left" @click="back" />
      <h1>拉勾网</h1>
      <van-icon name="wap-home-o" @click="home" />
    </header>
    <div class='oplus'>
        <div class='plusbtn'>
            <span>已开启</span>
            <div class='btn'>
                <van-icon name="success" />
                <div class='round'></div>
            </div>
        </div>
        <a href="">设置要屏蔽的企业 ></a>
    </div>
    <p>暂时还没有收到邀约,你可以一边主动投递简历,一边等待企业的邀约~</p>
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
.invite {
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
  .oplus{
      width:3.45rem;
      height:1.175rem;
      background:#eafffa;
      border:1px solid #c7f3e9;
      margin:0.14rem auto;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-around;
      .plusbtn{
          width:1.5525rem;
          height:0.32rem;
          display:flex;
          align-items:center;
          justify-content:space-around;
          span{
              font-size:0.13624rem;
          }
          .btn{
              width:0.68rem;
              height:0.28rem;
              border-radius:0.15rem;
              background:#22cda6;
              display:flex;
              align-items:center;
              justify-content:space-between;
              i{
                  color:white;
                  font-size:0.18rem;
                  margin-left:0.1rem;
              }
              .round{
                  width:0.24rem;
                  height:0.24rem;
                  background:white;
                  border-radius:50%;
              }
          }
      }
      a{
          font-size:0.13624rem;
          color:#00b38a;
      }
  }
  p{
      font-size:0.14672rem;
      color:#666;
      padding:0.14rem;
      line-height:0.2rem;
  }
}
</style>
<template>
  <div class="mine">
    <router-link class="login" to="/login" v-if="loginBefore">登录 / 注册</router-link>
    <div class="profile" v-if="loginAfter">
      <div class="avatar">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594620171402&di=5c6ddad30ca9353081a5f55ce2bdc7da&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F84a45124b02ec09e308c8a5ddd6077e129fbbda066af-95O2mV_fw236"
          alt
        />
      </div>
      <span >我的简历 ></span>
    </div>
    <div class="button">
      <router-link to="/deliver">投递</router-link>
      <router-link to="/quiz">面试</router-link>
      <router-link to="/invitation">邀约</router-link>
      <router-link to="/collect">我的收藏</router-link>
    </div>
    <button class='quit' v-if='logout' @click='moveToken'>退出登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginBefore: true,
      loginAfter: false,
      logout:false
    };
  },
  methods: {
    moveToken() {
      localStorage.removeItem('token')
      this.logout = false
      this.loginBefore = true
      this.loginAfter = false
    }
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.loginBefore = false;
      this.loginAfter = true;
      this.logout = true
    } else {
      this.loginBefore = true 
      this.loginAfter = false
      this.logout = false
    }
  }
};
</script>


<style lang="scss" scoped>
.mine {
  .profile {
    width: 3.45rem;
    height: 1.11rem;
    margin: 0.5rem auto;
    position: relative;
    .avatar {
      width: 0.81rem;
      height: 0.81rem;
      border-radius: 50%;
      margin: auto;
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
    span {
      font-size: 0.14rem;
      color: #00b38a;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .login {
    width: 1.25rem;
    height: 0.45rem;
    display: block;
    background: #00b38a;
    font-size: 0.14672rem;
    color: white;
    line-height: 0.45rem;
    text-align: center;
    cursor: pointer;
    margin: 0.5rem auto;
  }
  .button {
    width: 3.45rem;
    height: 1.92rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
      width: 1.65rem;
      height: 0.86rem;
      display: inline-block;
      background: #00b38a;
      font-size: 0.16768rem;
      color: white;
      line-height: 0.86rem;
      text-align: center;
    }
  }
  .quit{
    display:block;
    width:3.45rem;
    height:0.4rem;
    border:0;
    background:#00b38a;
    margin:auto;
    text-align:center;
    line-height:0.4rem;
    font-size:0.16768rem;
    color:white;
  }
}
</style>
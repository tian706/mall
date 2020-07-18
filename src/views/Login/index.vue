



<template>
    <div class='loginPage'>
        <header>
            <span class='left'>登录拉勾</span>
            <router-link class='right' to='/register'>注册</router-link>
        </header>
        <form action="">
            <input type="text" placeholder='请输入已注册的账号' v-model='username'>
            <input type="password" placeholder='请输入密码' v-model='password'>
            <input type="submit" value='登录' class='loginbtn' @click.prevent='login'>
        </form>
        <a href="" class='loginphone'>手机号登录</a>
    </div>
</template>


<script>
export default {
    data() {
        return{
            username:'',
            password:''
        }
    },
    methods:{
        //发送登录请求
        async login() {
            await this.$store.dispatch('login',{
                username:this.username,
                password:this.password
            })
            //请求结果轻提示
            this.$toast.fail(this.$store.state.loginData.data.msg)
            //判断请求结果是否成功，成功则一秒钟后跳转页面
            if(this.$store.state.loginData.data.code === 200) {
                this.$store.commit('changeToken',this.$store.state.loginData.data.token)
                this.$store.commit('changeId',this.$store.state.loginData.data.id)
                localStorage.setItem('token',this.$store.state.token)
                localStorage.setItem('id',this.$store.state.id)
                setTimeout(() => {
                    this.$router.push('/mine')
                },1000)
            }
        }

    }
}
</script>


<style lang="scss" scoped>
    .loginPage{
        position:absolute;
        width:100%;
        height:100%;
        background:#fff;
        z-index:10;
        header{
            width:3.1275rem;
            height:0.25rem;
            margin:0.45rem auto;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .left{
                font-size:0.19125rem;
                color:#333
            }
            .right{
                font-size:0.15rem;
                color:#00b38a;
            }
        }
        form{
            width:3.1275rem;
            height:1.8025rem;
            margin:auto;
            input{
                width:100%;
                height:0.4325rem;
                border:0;
                border-bottom:1px solid gray;
                font-size:0.16rem;
            }
            .loginbtn{
                background:#00b38a
            }
        }
        .loginphone{
            font-size:0.15rem;
            color:#00b38a;
            position:absolute;
            bottom:0.2rem;
            left:0.2rem;
            display:block;
        }
    }
</style>
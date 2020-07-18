<template>
    <div class='register'>
        <header>
            <h2>注册拉勾</h2>
            <span>登录</span>
        </header>
        <form action="">
            <div class='name'>
                <input type="text" placeholder='请输入你的昵称' v-model='name'>
            </div>
            <div class='phone'>
                <input type="text" placeholder='请输入你的账号' v-model='username'>
            </div>
            <div>
                <input type='password' placeholder='请输入你的密码' v-model='password'>
            </div>
        </form>
        <div class='registerBtn' @click='register'>注册</div>
    </div>
</template>


<script>

export default {
    data() {
        return{
            name:'',
            username:'',
            password:''
        }
    },
    methods:{
        //发送注册请求
        async register() {
            await this.$store.dispatch('register',{
                name:this.name,
                username:this.username,
                password:this.password
                }
            )
            console.log(this.$store.state.registerData)
            //注册结果轻提示
            this.$toast.fail(this.$store.state.registerData.data.msg)
            //判断注册是否成功，成功则一秒钟之后跳转页面到登录页面
            if(this.$store.state.registerData.data.code===200){
                setTimeout(() => {
                    this.$router.push('/login')
                },1000)
            }
            
        }
    }
    
}
</script>



<style lang="scss" scoped>
    .register{
        position:absolute;
        width:100%;
        height:100%;
        background:#fff;
        z-index:10;
        header{
            height:0.25rem;
            width:3.1275rem;
            margin:0.5rem auto;
            display:flex;
            justify-content:space-between;
            align-items:center;
            h2{
                font-size:0.19125rem;
                color:#333;
            }
            span{
                font-size:0.15rem;
                color:#00b38a;
            }
        }
        form{
            width:3.1275rem;
            height:2.1913rem;
            margin:auto;
            div{
                width:100%;
                height:0.4325rem;
                border-bottom:1px solid #e8e8e8;
                font-size:0.18rem;
                display:flex;
                align-items:center;
                input{
                    border:0;
                }
                button{
                    font-size:0.16rem;
                    color:#333;
                    background:#fff;
                    border:0;
                }
            }
        }
        .registerBtn{
            width:3.1275rem;
            height:0.4388rem;
            background:#00b38a;
            text-align:center;
            line-height:0.4388rem;
            border-radius:0.1rem;
            margin:auto;
            font-size:0.18rem;
            color:white;
            margin-top:-0.6rem;
        }
    }
</style>
<template>
    <div>
        <span>10秒钟定制职位</span>
        <button @click='gologin'>去登陆</button>
    </div>
</template>

<script>
export default {
    methods:{
        gologin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        display:flex;
        box-sizing:border-box;
        width:100%;
        height:0.46rem;
        border-bottom:1px solid #eee;
        justify-content:space-between;
        padding:0 0.15rem;
        align-items:center;
        span{
            font-size:0.14672rem;
        }
        button{
            width:0.84rem;
            height:0.3rem;
            border-radius:0.15rem;
            text-align:center;
            line-height:0.3rem;
            font-size:0.16rem;
            color:#00b38a;
            border:0
        }
    }
</style>
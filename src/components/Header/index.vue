<template>
    <div>
        <van-icon name="arrow-left" @click='back' v-show='backflag'/>
        <h1>拉勾网</h1>
        <van-icon name="wap-home-o" @click='home' v-show='homeflag'/>
    </div>
</template>

<script>
export default {
    data() {
        return{
            backflag:false,
            homeflag:false
        }
    },
    methods:{
        back() {
            this.$router.back()
        },
        home() {
            this.$router.push('/position')
        }
    },
    watch:{
        $route() {
            let arr = ['/position','/search','/mine']
           if(arr.indexOf(this.$route.path) == -1) {
               this.backflag = true
               this.homeflag = true
           }else{
               this.backflag = false
               this.homeflag = false
           }
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
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
</style>
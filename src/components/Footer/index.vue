<template>
    <footer>
        <ul>
            <router-link v-for='(item,index) in list' :key='index' :to='path[index]' @click.native = 'changeCurrentIndex(index)' :class='{iconStyle:currentIndex ===index}'>
                <van-icon :name='icon[index]' />
                {{item}} 
            </router-link>
        </ul>
    </footer>
</template>


<script>
export default {
    data() {
        return {
            list:['职位','搜索','我的'],
            icon:['wap-home-o','search','user-o'],
            path:['/position','/search','/mine'],
            currentIndex:0
        }
    },
    methods:{
        changeCurrentIndex(index) {
            this.currentIndex = index
        }
    }
}
</script>


<style lang="scss" scoped>
    footer{
        width:100%;
        height:0.46rem;
        ul{
            height:100%;
            display:flex;
            align-items:center;
            a{
                flex:1;
                font-size:0.16768rem;
                text-align:center;
                color:gray;
            }
        }
    }
    .iconStyle{
        color:aquamarine
    }
</style>
<template>
    <div class='detail'>
        <div class='positionName'>
            <h1> {{$route.query.positionName}} </h1>
            <div class='collect-box'>
                <van-icon name="star" :class='{color:iscollect}'/>
                <span @click='collect'> {{collectState}} </span>
            </div>
        </div>
        <div class='position-detail'>
            <ul>
                <li>
                    <van-icon name="after-sale" />
                    <span>{{$route.query.salary}} </span>
                </li>
                <li>
                    <van-icon name="location-o" />
                    <span>{{$route.query.city}} </span>
                </li>
                <li>
                    <van-icon name="clock-o" />
                    <span>全职</span>
                </li>
                <li>
                    <van-icon name="passed" />
                    <span>3-5年</span>
                </li>
                <li>
                    <van-icon name="award-o" />
                    <span>本科及以上</span>
                </li>
            </ul>
            <p>职位诱惑：年终奖，有加班费，团队氛围轻松</p>
        </div>
        <div class='company-box'>
            <div class='company-logo'>
                <img :src="'https://www.lgstatic.com/'+$route.query.companyLogo" alt="">
            </div>
            <div class='company-text'>
                <h2> {{$route.query.companyName}} </h2>
                <p>金融移动互联网/不需要融资/150-500人</p>
            </div>
        </div>
        <div class='direction'>职位描述</div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            collectState:'未收藏',
            iscollect:false
        }
    },
    components:{
       
    },
    methods:{
        collect() {
            if(localStorage.getItem('token')) {
                this.$store.dispatch('collection',this.$route.params.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .positionName{
        width:100%;
        height:0.49rem;
        padding:0 0.15rem;
        box-sizing:border-box;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:space-between;
        align-items:center;
        h1{
            font-size:0.18864rem;
            color:#333;
        }
        .collect-box{
            width:0.59rem;
            height:0.49rem;
            box-sizing:border-box;
            padding:0.06rem 0.1rem 0;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            i{
                font-size:0.15rem;
                color:#666;
            }
            span{
                font-size:0.12rem;
                color:gray;
            }
        }
    }
    .position-detail{
        width:100%;
        height:1.11rem;
        box-sizing:border-box;
        padding:0.15rem;
        font-size:0.12rem;
        color:#333;
        border-bottom:1px solid #eee;
        ul{
            width:100%;
            height:0.62rem;
            display:flex;
            flex-wrap:wrap;
            li{
                width:33.3%;
                i{
                    color:#00b38a;
                    margin-right:0.1rem;
                }
            }
        }
        p{
            color:#888;
            font-size:0.13624rem;
        }
    }
    .company-box{
        width:100%;
        height:0.93rem;
        box-sizing:border-box;
        padding:0.15rem;
        display:flex;
        align-items:center;
        .company-logo{
            width:0.6rem;
            height:0.6rem;
            img{
                display:block;
                width:100%;
            }
        }
       .company-text{
         flex:1;
         display:flex;
         flex-direction:column;
         margin-left:0.1rem;
         h2{
             font-size:0.18854rem;
             color:#00b38a
         }
         p{
             font-size:0.12576rem;
             color:#888;
             margin:0.1rem 0;
         }
       }
    }
    .direction{
        width:100%;
        height:0.36rem;
        background:#d2f9f0;
        line-height:0.36rem;
        font-size:0.14672rem;
        padding: 0 0 0 0.15rem;
    }
</style>
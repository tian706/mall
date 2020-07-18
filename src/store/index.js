//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
//引入封装好的axios模块
import {get,post} from '../utils/request.js'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        positionData:[], //请求职位相关数据
        page:1, //请求加载更多时卸载的参数
        searchData:[], 
        registerData:null, //请求注册结果数据
        loginData:null,     //请求登录结果数据
        token:'',
        id:''
    },
    getter:{
        
    },
    mutations:{
        //修改职位数据
        change(state,payload) {
            this.state.positionData.push(...payload)
        },
        //修改请求职位数据携带的page参数
        addPage(state) {
            this.state.page++
        },
        changeRegisterData(state,payload) {
            this.state.registerData = payload
        },
        changeLoginData(state,payload) {
            this.state.loginData = payload
        },
        changeToken(state,payload) {
            this.state.token = payload
        },
        changeId(state,payload) {
            this.state.id = payload
        }
    },
    actions:{
        //请求职位页面的数据
        getData(context,payload) {
            axios.get('/listmore.json',{
                params:{
                    pageNo:context.state.page,
                    pageSize:15
                }
            }).then(function(data) {
                console.log(data.data.content.data.page.result)
                let result = data.data.content.data.page.result
                context.commit('change',result)
            })
        },
        //请求搜索页面的数据
        getSearch(context,payload) {
            return axios.get('/search.json',{
                params:{
                    city:payload.value,
                    positionName:payload.keywords,
                    pageNo:1,
                    pageSize:15
                }
            })
        },
        //发送注册请求
        register(context,payload) {
            return post('http://112.74.99.5:3000/web/api/register',{
                name:payload.name,
                username:payload.username,
                password:payload.password
            }).then((res) => {
                console.log(res)
                context.commit('changeRegisterData',res)
            })
        },
        //发送登录请求
        login(context,payload) {
            return post('http://112.74.99.5:3000/web/api/login',{
                username:payload.username,
                password:payload.password
            }).then((res) => {
                console.log(res)
                context.commit('changeLoginData',res)
            })
        },
        profile(context,payload) {
            get('http://112.74.99.5:3000/web/api/user/'+localStorage.getItem('id'),{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('token')
                }
            }).then((res) =>{
                console.log(res)
            })
        },
        collection(context,payload) {
            post(`http://112.74.99.5:3000/web/api/collection/${localStorage.getItem('id')}`,{
                position_id:payload
            }).then((res) =>{console.log(res)})
        }
    }
})
export default store
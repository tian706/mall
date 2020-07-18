import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Position = () => import('../views/Position')
const Search = () => import('../views/Search')
const Mine = () => import('../views/Mine')
const Detail = () => import('../views/Detail')
const Login = () => import('../views/Login')
const Register = () => import ('../views/Register')
const Deliver = () =>import('../views/Deliver')
const Collect = () => import('../views/Collect')
const Quiz = () => import('../views/Quiz')
const Invitation = () => import('../views/Invitation')

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/position'
        },
        {
            path:'/position',
            component:Position
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:Detail
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/collect',
            component:Collect,
            meta:{
                auth:true
            }
        },
        {
            path:'/deliver',
            component:Deliver,
            meta:{
                auth:true
            }
        },
        {
            path:'/quiz',
            component:Quiz,
            meta:{
                auth:true
            }
        },
        {
            path:'/invitation',
            component:Invitation,
            meta:{
                auth:true
            }
        }
    ]
})
router.beforeEach((to,from,next) =>{
    if(to.meta.auth) {
        const token = localStorage.getItem('token');
        if(token) {
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
export default router
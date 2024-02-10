import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/',
        component:{
            render(c){
                return c('router-view')
            }
        },
        children:[
            {
                path:'/welcome',
                name:'theWelcome',
                component:() => import('../components/TheWelcome.vue')
            },
            {
                path:'/form',
                name:'theForm',
                component:() => import('../modules/users/Form.vue')
            },
            {
                path:'/users',
                name:'theUsers',
                component:() => import('../modules/users/Users.vue')
            }
        ]
    },
    {
        path: '/toys',
        name: 'toysModule',
        component: () => import('../modules/toys/Inicio.vue'),
        children:[
            {
                path:'videogames',
                name:'VideoGamesPage',
                component:() => import('../modules/toys/Videogames.vue')
            }
        ]
    }
]

const router = new VueRouter({ routes })
export default router;
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  
    {
        path:'/',
        redirect:'/form',
    },
    {
        path:'/form',
        name:'Form',
        component: ()=> import('../modules/users/Form.vue'),
    },
    {
        path:'/users',
        name:'Users',
        component: ()=> import('../modules/users/Users.vue'),
    },
    {
        path: '/juguetes',
        name: 'Juguetes',
        component: ()=> import('../components/Inicio.vue'),
        children: [
            {
                path:'electronic',
                name:'ElectronicPage',
                component: ()=> import('../components/Inicio.vue'),
            },
            {
                path:'videogames',
                name:'VideoGamesPage',
                component: ()=> import('../modules/toys/Videogames.vue'),
            }
        ]
    }
]

const router = new VueRouter({ routes })
export default router;
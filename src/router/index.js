import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CityDetails from '../views/CityDetails.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/CityDetails',
        name: 'CityDetails',
        component: CityDetails
    }
]

const router = new VueRouter({
    routes
})

export default router
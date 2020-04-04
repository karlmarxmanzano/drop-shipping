import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/pages/Home'
import SignIn from '../views/pages/SignIn'
import SignUp from '../views/pages/SignUp'
import Dashboard from '../views/pages/Dashboard'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (!store.getters['authenticated']) {
                next({
                    name: 'home'
                })
            }

            next();
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
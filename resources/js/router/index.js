import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/pages/Home'
import SignIn from '../views/pages/auth/SignIn'
import SignUp from '../views/pages/auth/SignUp'
import Dashboard from '../views/pages/Dashboard'

/**
 * 
 * User
 * 
 */
import User from '../views/pages/users/User'

/**
 * 
 * Product
 * 
 */

import ProductIndex from '../views/pages/product/Index'

/**
 * 
 * Permission
 * 
 */
import Permission from '../views/pages/permissons/Permission'

/**
 * 
 * Permission
 * 
 */
import Role from '../views/pages/roles/Role'

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
        name: 'Dashboard',
        component: Dashboard,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters['auth/authenticated']) {
        //         next({
        //             name: 'home'
        //         })
        //     }

        //     next();
        // }
    },
    {
        path: '/users/list',
        name: 'User',
        component: User
    },
    {
        path: '/product/list',
        name: 'Product',
        component: ProductIndex,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters['auth/authenticated']) {
        //         next({
        //             name: 'signin'
        //         })
        //     }

        //     next();
        // }
    },
    {
        path: '/permissions/list',
        name: 'Permission',
        component: Permission
    },
    {
        path: '/roles/list',
        name: 'Role',
        component: Role
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
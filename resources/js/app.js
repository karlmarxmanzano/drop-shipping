require('./bootstrap');

// window.Vue = require('vue');

import Vue from 'vue';

import router from './router/index';
import store from './store/index';

import vuetify from './plugins/vuetify';

import mainApp from './App.vue'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

require('./store/subscriber');

store.dispatch('auth/attempt', localStorage.getItem('token'))
    .then(() => {
        const app = new Vue({
            el: '#app',
            router,
            store,
            vuetify,
            components: {
                mainApp
            }
        });
    })

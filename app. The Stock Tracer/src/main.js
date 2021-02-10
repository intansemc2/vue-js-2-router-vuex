// Import libraries
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes.js';

import store from './store/store.js';

Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes });

Vue.filter('currency', (value) => {
    return `$${parseInt(value).toLocaleString('en-US')}`;
});

Vue.filter('quantity', (value) => {
    return `${parseInt(value).toLocaleString('en-US')}`;
});

// Main app
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});

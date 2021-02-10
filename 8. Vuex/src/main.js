import Vue from 'vue';
import App from './App.vue';

import { store } from './stores/stores.js';

new Vue({
    el: '#app',
    store: store,
    render: (h) => h(App),
});

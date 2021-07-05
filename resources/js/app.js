require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue'
const app = createApp(App);

// router
import router from './router/index.js'
app.use(router)

// vuex
import store from './store/index.js'
app.use(store)

// component setup
app.component('app', require('./App.vue').default);

// app.component('app', App);

// app mount
app.mount('#app');

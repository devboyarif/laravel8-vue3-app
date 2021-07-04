require('./bootstrap');

import { createApp } from 'vue';

import App from './components/App.vue'
const app = createApp(App);

// vue router use
import router from './router/index.js'
app.use(router)

// component setup
app.component('app', App);


app.mount('#app');

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

// vform
// import './plugins/vform.js';
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
// app.component(HasError.name, HasError)
// app.component(AlertError.name, AlertError)

// component setup
app.component('app', require('./App.vue').default);

// app.component('app', App);

// app mount
app.mount('#app');

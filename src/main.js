import Vue from 'vue'
import App from './App.vue'
// 引入axios
import Axios from 'axios'
import VueRouter from "vue-router";

import Refister from "@/components/Refister.vue";

import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'
import './static/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import loginDev from "@/components/login-dev.vue";

Vue.config.productionTip = true
// 将axios挂载到Vue原型的原型上
Vue.prototype.$axios = Axios;
/*
Axios.defaults.baseURL = '/api'
*/

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: [
    {path: '/login', component: loginDev},
    {path: '/reg', component: Refister}

  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
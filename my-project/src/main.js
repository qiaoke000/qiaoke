// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://840f52df-329a-455d-ae39-6a1a4128349f.bspapp.com'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

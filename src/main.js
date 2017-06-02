// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import Axios from 'axios'
import './directive/p-scroll'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.prototype.$http = Axios
Vue.config.productionTip = false
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

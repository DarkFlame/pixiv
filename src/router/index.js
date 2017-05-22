import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recommend from '@/components/recommend/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})

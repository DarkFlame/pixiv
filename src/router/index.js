import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recommend from '@/components/recommend/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})

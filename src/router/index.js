import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recommend from '@/components/recommend/Recommend'
import Search from '@/components/search/Search'

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
    },{
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})

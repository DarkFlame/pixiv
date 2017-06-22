import Vue from 'vue'
import Router from 'vue-router'
// import Home from ''
// import Recommend from ''
// import Search from '@/components/search/Search'
const Home = r => require.ensure([], () => r(require('@/components/Home')), 'test1')
const Recommend = r => require.ensure([], () => r(require('@/components/recommend/Recommend')), 'test1')
const Search = r => require.ensure([], () => r(require('@/components/search/Search')), 'test1')
const MemberIllust = r => require.ensure([], () => r(require('@/components/memberIllust/MemberIllust')), 'test1')
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
    },{
      path: '/memberIllust/:pid',
      name: 'memberIllust',
      component: MemberIllust
    }
  ]
})

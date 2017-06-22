import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/components/home')), 'test1')
const Recommend = r => require.ensure([], () => r(require('@/components/recommend/recommend')), 'test1')
const Search = r => require.ensure([], () => r(require('@/components/search/search')), 'test1')
const MemberIllust = r => require.ensure([], () => r(require('@/components/memberIllust/memberIllust')), 'test1')
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

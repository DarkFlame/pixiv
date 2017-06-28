import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([],() => r(require('@/components/home')),'test1')
const Recommend = r => require.ensure([],() => r(require('@/components/recommend/recommend')),'test1')
const Search = r => require.ensure([],() => r(require('@/components/search/search')),'test1')
const MemberIllust = r => require.ensure([],() => r(require('@/components/member/memberIllust')),'test1')
const MemberList = r => require.ensure([],() => r(require('@/components/member/memberList')),'test1')
const MemberUser = r => require.ensure([],() => r(require('@/components/member/memberUser')),'test1')
const NullComponent = {template: '<div>test</div>'}
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
    },
    // {
    //   path: '/memberIllust/:pid',
    //   name: 'memberIllust',
    //   component: {
    //     default:MemberIllust,
    //     'a':MemberIllust
    //   }
    // },
    {
      path: '/member/:userid',
      name: 'member',
      component: MemberUser,
      children: [
        {
          path: 'list',
          component: MemberList,
          meta:{
            activeTab:'list'
          }
        },
        {
          path: 'illust/:pid',
          component: MemberIllust,
          meta:{
            activeTab:'list'
          }
        }
      ]
    }
  ]
})

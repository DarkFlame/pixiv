import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([],() => r(require('@/components/home')),'test1')
const Recommend = r => require.ensure([],() => r(require('@/components/recommend/recommend')),'test1')
const Search = r => require.ensure([],() => r(require('@/components/search/search')),'test1')
const MemberIllust = r => require.ensure([],() => r(require('@/components/member/memberIllust')),'test1')
const MemberList = r => require.ensure([],() => r(require('@/components/member/memberList')),'test1')
const MemberUser = r => require.ensure([],() => r(require('@/components/member/memberUser')),'test1')
const MemberDetail = r => require.ensure([],() => r(require('@/components/member/memberDetail')),'test1')
const MemberBookmark = r => require.ensure([],() => r(require('@/components/member/memberBookmark')),'test1')
const NullComponent = {template: '<div>test</div>'}
Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    //定义滚屏行为
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
          path: 'detail',
          component: MemberDetail,
          meta: {
            activeTab: 'detail'
          }
        },{
          path: 'bookmark',
          component: MemberBookmark,
          meta: {
            activeTab: 'bookmark'
          }
        },{
          path: 'list',
          component: MemberList,
          meta: {
            activeTab: 'list'
          }
        },
        {
          path: 'illust/:pid',
          component: MemberIllust,
          meta: {
            activeTab: 'list'
          }
        }
      ]
    }
  ]
})

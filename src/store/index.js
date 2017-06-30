import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import recommend from './modules/recommend'
import header from './modules/header'
import search from './modules/search'
import memberIllust from './modules/memberIllust'
import memberUser from './modules/memberUser'
import memberList from './modules/memberList'
import memberBookmark from './modules/member/memberBookmark'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

//为什么vuex在这里注入 是因为必须在new store之前注入到vue中
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    member: {
      modules:{
        memberBookmark
      }
    },
    recommend,
    header,
    search,
    memberUser,
    memberList,
    memberIllust
  },
  mutations,
  strict: debug,
  plugins: debug ? [createLogger({
    collapsed: false, // 自动展开记录的 mutation
  })] : []
})

if (module.hot) {
  // // 使 actions 和 mutations 成为可热重载模块
  // module.hot.accept(['./mutations'],() => {
  //   // 获取更新后的模块
  //   // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
  //   const newMutations = require('./mutations').default
  //   // 加载新模块
  //   store.hotUpdate({
  //     mutations: newMutations
  //   })
  // })
}
export default store




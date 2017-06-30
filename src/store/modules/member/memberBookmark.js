import * as types from '@/store/mutation-types'
import FetchApi from '@/api/fetch'
const state = {
  memberBookmarkList: null
}

// getters
const getters = {
  memberBookmarkList: state => state.memberBookmarkList,
}

// actions
const actions = {
  getMemberBookmarkList({commit},payload){
    return FetchApi.getIllustBookmarkDetail(payload).then(({data}) => {
      commit(types.SET_MEMBER_BOOKMARK_LIST,data.data)
      return Promise.resolve(data.data)
    })
  }  ,
  setMemberBookmarkList({commit},payload){
    return commit(types.SET_MEMBER_BOOKMARK_LIST,payload)
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_BOOKMARK_LIST](state,payload){
    state.memberBookmarkList = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

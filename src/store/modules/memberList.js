import * as types from '../mutation-types'

import FetchApi from '../../api/fetch'
const state = {
  memberList: null
}

// getters
const getters = {
  memberList: state => state.memberList
}

// actions
const actions = {
  getMemberList({commit},payload){
    return FetchApi.getUserIllusts(payload).then(({data}) => {
      commit(types.SET_MEMBER_LIST,data.data)
    })
  },
  setMemberList({commit},payload){
    commit(types.SET_MEMBER_LIST,payload)
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_LIST](state,payload){
    state.memberList = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

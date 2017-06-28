import * as types from '../mutation-types'

import FetchApi from '../../api/fetch'
const state = {
  memberIllust: null
}

// getters
const getters = {
  memberIllust: state => state.memberIllust
}

// actions
const actions = {
  getMemberIllust({commit},payload){
    return FetchApi.getFetchId(payload).then(({data}) => {
      commit(types.SET_MEMBER_ILLUST,data.data)
    })
  },
  setMemberIllust({commit},payload){
    commit(types.SET_MEMBER_ILLUST,payload)
  },
  downloadImgById({commit},payload){
    return FetchApi.downloadImgById(payload)
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_ILLUST](state,payload){
    state.memberIllust = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

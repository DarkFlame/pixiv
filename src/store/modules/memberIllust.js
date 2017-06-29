import * as types from '../mutation-types'

import FetchApi from '../../api/fetch'
const state = {
  memberIllust: null,
  illustRelatedList: null
}

// getters
const getters = {
  memberIllust: state => state.memberIllust,
  illustRelatedList: state => state.illustRelatedList,
}

// actions
const actions = {
  getMemberIllust({commit},payload){
    return FetchApi.getFetchId(payload).then(({data}) => {
      commit(types.SET_MEMBER_ILLUST,data.data)
    })
  },
  getIllustRelated({commit},payload){
    return FetchApi.getIllustRelated(payload).then(({data}) => {
      commit(types.SET_ILLUST_RELATED_LIST,data.data)
    })
  },
  setMemberIllust({commit},payload){
    commit(types.SET_MEMBER_ILLUST,payload)
  },
  setIllustRelated({commit},payload){
    commit(types.SET_ILLUST_RELATED_LIST,payload)
  },
  downloadImgById({},payload){
    return FetchApi.downloadImgById(payload)
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_ILLUST](state,payload){
    state.memberIllust = payload
  },
  [types.SET_ILLUST_RELATED_LIST](state,payload){
    state.illustRelatedList = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

import FetchApi from '../../api/fetch'
const state = {
  memberTabList: [{
    name: '个人资料',
    id: 'detail',
    getUrl: (userId) => `/member/${userId}/detail`
  },{
    name: '作品',
    id: 'list',
    getUrl: (userId) => `/member/${userId}/list`
  },{
    name: '收藏',
    id: 'bookmark'
  },{
    name: '动态',
    id: 'dynamic'
  }],
  memberUser: null,
  memberTags: null
}

// getters
const getters = {
  memberUser: state => state.memberUser,
  memberTabList: state => state.memberTabList,
  memberTags: state => state.memberTags
}

// actions
const actions = {
  getMemberUser({commit},payload){
    return FetchApi.getUserDetail(payload).then(({data}) => {
      commit(types.SET_MEMBER_USER,data.data)
    })
  },
  setMemberUser({commit},payload){
    commit(types.SET_MEMBER_USER,payload)
  },
  setMemberTags({commit},payload){
    commit(types.SET_MEMBER_TAGS,payload)
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_USER](state,payload){
    state.memberUser = payload
  },
  [types.SET_MEMBER_TAGS](state,payload){
    state.memberTags = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

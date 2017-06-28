import * as types from '../mutation-types'

import axios from 'axios'
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
  },],
  memberUser: null,
  memberActiveTab: 'list',
}

// getters
const getters = {
  memberUser: state => state.memberUser,
  memberTabList: state => state.memberTabList,
  memberActiveTab: state => state.memberActiveTab
}

// actions
const actions = {
  getMemberUser({commit},payload){
    return axios.get(`/api/userDetail/${payload}`).then(({data}) => {
      commit(types.SET_MEMBER_USER,data.data)
    })
  },
  setMemberActiveTab({commit},payload){
      commit(types.SET_MEMBER_ACTIVE_TAB,payload)
  },

}

// mutations
const mutations = {
  [types.SET_MEMBER_USER](state,payload){
    state.memberUser = payload
  },
  [types.SET_MEMBER_ACTIVE_TAB](state,payload){
    state.memberActiveTab = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

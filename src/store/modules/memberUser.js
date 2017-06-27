import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  memberTabList: [{
    name: '个人资料',
    id: 'list'
  },{
    name: '作品',
    id: 'illust'
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
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_USER](state,payload){
    state.memberUser = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  memberUser: null
}

// getters
const getters = {
  memberUser: state => state.memberUser
}

// actions
const actions = {
  getMemberUser({commit},payload){
    return axios.get(`/api/userDetail/${payload}`).then(({data}) => {
      commit(types.SET_MEMBER_User,data.data)
    })
  }
}

// mutations
const mutations = {
  [types.SET_MEMBER_User](state,payload){
    state.memberUser = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

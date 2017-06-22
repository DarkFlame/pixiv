import * as types from '../mutation-types'

import axios from 'axios'
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
    return axios.get(`/api/fetchById/${payload}`).then(({data}) => {
      commit(types.SET_MEMBER_ILLUST,data.data)
    })
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

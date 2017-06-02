import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  bookmark: 0
}

// getters
const getters = {
  bookmark: state => state.bookmark
}

// actions
const actions = {
  setBookmark({commit},payload){
    commit(types.SET_BOOKMARK,payload)
  }
}

// mutations
const mutations = {
  [types.SET_BOOKMARK](state,payload){
    state.bookmark = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

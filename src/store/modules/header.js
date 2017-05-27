import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  searchIllust: {},
  keywords: ''
}

// getters
const getters = {
  searchIllust: state => state.searchIllust,
  keywords: state => state.keywords
}

// actions
const actions = {
  getSearchIllust ({commit,state}) {
    axios.get(`/api/searchKeywords/${state.keywords}`).then(({data}) => {
      console.log(data.data)
      commit(types.SET_SEARCH_ILLUST,{searchIllust: data.data})
    })
  },
  setKeywords ({commit,state},keywords) {
    commit(types.SET_KEYWORDS,keywords)
  }
}

// mutations
const mutations = {
  [types.SET_KEYWORDS] (state,keywords) {
    state.keywords = keywords
  },
  [types.SET_SEARCH_ILLUST] (state,{searchIllust}) {
    state.searchIllust = searchIllust
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  searchIllust: {
    illusts: false
  },
  keywords: ''
}

// getters
const getters = {
  searchIllust: state => state.searchIllust,
  keywords: state => state.keywords
}

// actions
const actions = {
  getSearchIllust ({commit,state,rootState}) {
    if (!state.keywords) return Promise.resolve()
    return axios.get(`/api/searchKeywords/${state.keywords}?bookmark=${rootState.search.bookmark || ''}`).then(({data}) => {
      commit(types.SET_SEARCH_ILLUST,{searchIllust: data.data})
    })
  },
  getSearchNextIllust ({commit,state,rootState}) {
    if (!state.searchIllust || !state.searchIllust.nextUrl) return Promise.resolve()
    return axios.post(`/api/fetch`,{
      url: state.searchIllust.nextUrl
    }).then(({data}) => {
      commit(types.CONCAT_SEARCH_ILLUST,{searchIllust: data.data})
      return Promise.resolve(data.data)
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
  },
  [types.CONCAT_SEARCH_ILLUST] (state,{searchIllust}) {
    state.searchIllust.nextUrl = searchIllust.nextUrl
    state.searchIllust.illusts = state.searchIllust.illusts.concat(searchIllust.illusts)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

import FetchApi from '../../api/fetch'
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
    return FetchApi.getSearchIllusts({
      keywords: state.keywords,
      bookmark: rootState.search.bookmark
    }).then(({data}) => {
      commit(types.SET_SEARCH_ILLUST, data.data)
    })
  },
  // getSearchNextIllust ({commit,state,rootState}) {
  //   if (!state.searchIllust || !state.searchIllust.nextUrl) return Promise.resolve()
  //   return FetchApi.fetchByUrl(state.searchIllust.nextUrl).then(({data}) => {
  //     commit(types.CONCAT_SEARCH_ILLUST,{searchIllust: data.data})
  //     return Promise.resolve(data.data)
  //   })
  // },
  setKeywords ({commit,state},keywords) {
    commit(types.SET_KEYWORDS,keywords)
  },
  setSearchIllust ({commit,state},payload) {
    commit(types.SET_SEARCH_ILLUST,payload)
  }
}

// mutations
const mutations = {
  [types.SET_KEYWORDS] (state,payload) {
    state.keywords = payload
  },
  [types.SET_SEARCH_ILLUST] (state,payload) {
    state.searchIllust = payload
  },
  // [types.CONCAT_SEARCH_ILLUST] (state,{searchIllust}) {
  //   state.searchIllust.nextUrl = searchIllust.nextUrl
  //   state.searchIllust.illusts = state.searchIllust.illusts.concat(searchIllust.illusts)
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}

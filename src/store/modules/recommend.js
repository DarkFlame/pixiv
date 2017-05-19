import * as types from '../mutation-types'

import axios from 'axios'
const state = {
  recommendList: []
}

// getters
const getters = {
  recommendList: state => state.recommendList
}

// actions
const actions = {
  getRecommendList ({commit,state}) {
    console.log(111);
    axios.get('/api/recommend/pages').then(({data}) => {
      console.log(data);
      commit(types.SET_RECOMMEND_LIST,{recommendList: data.data})
    })

  }
}

// mutations
const mutations = {
  [types.SET_RECOMMEND_LIST] (state,{recommendList}) {
    state.recommendList = recommendList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

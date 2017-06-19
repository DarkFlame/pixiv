import * as types from '../mutation-types'
import moment from 'moment'

import axios from 'axios'
const state = {
  recommendList: [],
  recommendDate: new Date()
}

// getters
const getters = {
  recommendList: state => state.recommendList,
  recommendDate: state => state.recommendDate
}

// actions
const actions = {
  getRecommendList ({commit,state}) {
    let {recommendDate} = state
    return axios.get(`/api/recommend/pages?date=${moment(recommendDate).format('YYYY-MM-DD')}`).then(({data}) => {
      commit(types.SET_RECOMMEND_LIST,{recommendList: data.data})
    })
  },
  setRecommendDate({commit,dispatch},recommendDate){
    commit(types.SET_RECOMMEND_DATE,recommendDate)
    dispatch('getRecommendList')
  }
}

// mutations
const mutations = {
  [types.SET_RECOMMEND_LIST] (state,{recommendList}) {
    state.recommendList = recommendList
  },
  [types.SET_RECOMMEND_DATE] (state,recommendDate) {
    state.recommendDate = recommendDate
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

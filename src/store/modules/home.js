import * as types from '@/store/mutation-types'
import FetchApi from '@/api/fetch'
const state = {
  dayRank: null,
  weekRank: null,
  monthRank: null,
}

// getters
const getters = {
  dayRank: state => state.dayRank,
  weekRank: state => state.weekRank,
  monthRank: state => state.monthRank,
}

// actions
const actions = {
  getDayRank({commit},payload){
    return FetchApi.getDayRank(payload).then(({data}) => {
      commit(types.SET_DAY_RANK,data.data)
      return Promise.resolve(data.data)
    })
  },
  setDayRank({commit},payload){
    return commit(types.SET_DAY_RANK,payload)
  },
  getWeekRank({commit},payload){
    return FetchApi.getWeekRank(payload).then(({data}) => {
      commit(types.SET_WEEK_RANK,data.data)
      return Promise.resolve(data.data)
    })
  },
  setWeekRank({commit},payload){
    return commit(types.SET_WEEK_RANK,payload)
  },
  getMonthRank({commit},payload){
    return FetchApi.getMonthRank(payload).then(({data}) => {
      commit(types.SET_MONTH_RANK,data.data)
      return Promise.resolve(data.data)
    })
  },
  setMonthRank({commit},payload){
    return commit(types.SET_MONTH_RANK,payload)
  },
}

// mutations
const mutations = {
  [types.SET_DAY_RANK](state,payload){
    state.dayRank = payload
  },
  [types.SET_WEEK_RANK](state,payload){
    state.weekRank = payload
  },
  [types.SET_MONTH_RANK](state,payload){
    state.monthRank = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

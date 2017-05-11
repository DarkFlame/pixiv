import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      currentPost: {
        content: '',
        id: ''
      },
      currentPostCompile: '',
      posts: [],
      allPage: 0,
      curPage: 0,
      tags: [],
      selectTags: [],
      sideBoxOpen: false
    },

    actions: {

    },

    mutations: {

    },
    getters: {

    }
  })
}

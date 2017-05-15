import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            login
        },
        state: {},
        actions: {},
        mutations: {},
        getters: {}
    })
}

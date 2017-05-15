import * as type from '../mutation-types'
import {usersRef} from '../models'
export const state = {
    username: 'initInput1',
    password: '',
    selectedUserList: [],
    userList: []
}
export const getters = {
    username(state) {
        return state.username
    },
    password(state) {
        return state.password
    },
    userList(state) {
        return state.userList
    },
    selectedUserList(state) {
        return state.selectedUserList
    }
}

export const actions = {
    setUsername({commit},payload) {
        commit(type.LOGIN_SET_USERNAME,payload)
    },
    setSelectedUserList({commit},payload) {
        commit(type.LOGIN_SET_SELECTEDUSERLIST,payload)
    },
    setPassword({commit},payload) {
        commit(type.LOGIN_SET_PASSWORD,payload)
    },
    login({commit},{username,password}){
        return usersRef.push({
            username,
            password,
            createdAt: new Date().toJSON()
        })
    },
    removeUserByKey({commit},{key}){
        return usersRef.child(key).remove()
    },
    removeUserBySelectKey({commit,dispatch},removeUserBySelectKey){
        let updates = {}
        for (let {key} of removeUserBySelectKey) {
            updates[key] = null
        }
        usersRef.update(updates).then(() => {
            dispatch('getAllUser')
        })
    },
    getAllUser({commit}){
        usersRef.limitToLast(100).once('value').then((res) => {
            commit(type.LOGIN_SET_USERLIST,res.val())
        });
    },
    getTableDisplayData({commit}){
        console.log(111)
    }
}

export const mutations = {
    [type.LOGIN_SET_USERNAME](state,payload){
        state.username = payload
    },
    [type.LOGIN_SET_PASSWORD](state,payload){
        state.password = payload
    },
    [type.LOGIN_SET_SELECTEDUSERLIST](state,payload){
        state.selectedUserList = payload
    },
    [type.LOGIN_SET_USERLIST](state,payload){
        let arr = []
        for (let [key,{username,password}] of Object.entries(payload)) {
            arr.push({
                key,
                username,
                password
            })
        }
        state.userList = arr
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}
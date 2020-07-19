import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as video from '@/vuex/modules/video.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      video
    },
    state: {
        user: null,
        
    },

    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                userData.token
            }`
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user')
            location.reload()
        },
    },
    actions: {
        register({ commit }, credentials) {
            return axios.post('http://127.0.0.1:8000/api/register', credentials).then(
              ({ data }) => {
                commit('SET_USER_DATA', data)
              }
            )
        },
        login({ commit }, credentials) {
            return axios.post('http://127.0.0.1:8000/api/login', credentials).then(
              ({ data }) => {
                commit('SET_USER_DATA', data)
              }
            )
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA')
        },
    },
    getters: {
        loggedIn(state) {
            return !!state.user // return true or false
        },
    }
})
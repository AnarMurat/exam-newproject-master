import Vue from 'vue'
import Vuex from 'vuex'
import brands from './brands'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0
  },
  getters: {
    getNumber(state) {
      return state.number
    }
  },
  mutations: {
    updateNumber(state) {
      state.number = state.number + 1
    }
  },
  actions: {
    getClick({commit}) {
      commit('updateNumber')
    }
  },
  modules: {
    brands,
  }
})

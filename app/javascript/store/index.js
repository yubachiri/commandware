import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  message: 'hello, vue with Rails!',
  counter: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

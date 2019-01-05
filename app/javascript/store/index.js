import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  commandViewVisible: false,
  detailViewVisible: false,
  detailEditable: false,
  flows: gon.flows,
  flow: {},
  commands: [],
  command: {},
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

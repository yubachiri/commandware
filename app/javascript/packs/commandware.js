import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import axios from 'axios';
// import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#commandware',
    store,

    data: {
      flows: gon.flows,
      flow: {},
      commands: [],
      command: {},
    },

    computed: {
      viewGrid: function () {
        return store.getters.viewGrid
      },
      commandViewVisible: function () {
        return store.state.commandViewVisible
      },
      detailViewVisible: function () {
        return store.state.detailViewVisible
      },

    },

    methods: {

      commandsDisplay(flowId) {
        this.commandViewToggle()
        this.getFlow(flowId)
        this.getCommands(flowId)
      },

      commandDisplay(commandId) {
        this.detailViewToggle()
        this.getCommand(commandId)
      },

      commandViewToggle() {
        store.commit('viewToggle', {targetView: 'commandView'})
      },
      detailViewToggle() {
        store.commit('viewToggle', {targetView: 'detailView'})
      },

      getFlows() {
        axios.get('/flows.json')
          .then(response => {
            this.flows = response.data
          })
      },

      getFlow(flowId) {
        axios.get(`/flows/${flowId}.json`)
          .then(response => {
            this.flow = response.data
          })
      },

      getCommands(flowId) {
        axios.get(`/flows/${flowId}/commands.json`)
          .then(response => {
            this.commands = response.data
          })
      },

      getCommand(commandId) {
        this.command = this.commands.filter(command => {
          return command.id === commandId
        })[0]
      }
    },

  })
})

import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import axios from 'axios';

Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#commandware',
    store,

    data: {
      newFlow: '',
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

      flow: function () {
        return store.state.flow
      },
      flows: function () {
        return store.state.flows
      },
      commands: function () {
        return store.state.commands
      },
      command: function () {
        return store.state.command
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
            store.commit('assignFlows', response.data)
          })
      },

      getFlow(flowId) {
        axios.get(`/flows/${flowId}.json`)
          .then(response => {
            store.commit('assignFlow', response.data)
          })
      },

      postFlow() {
        // TODO 実装
      },

      getCommands(flowId) {
        axios.get(`/flows/${flowId}/commands.json`)
          .then(response => {
            store.commit('assignCommands', response.data)
          })
      },

      getCommand(commandId) {
        const command = this.commands.filter(command => {
          return command.id === commandId
        })[0]
        store.commit('assignCommand', command)
      }
    },

  })
})

import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#commandware',
    store,

    data: {
      newFlow: '',
      editCommand: {
        name: '',
        description: '',
        command: ''
      },
      detailEditable: false,
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
        this.commandViewAppear()
        this.getFlow(flowId)
        this.getCommands(flowId)
      },

      commandDisplay(commandId) {
        this.detailEditable = false
        this.detailViewAppear()
        this.getCommand(commandId)
      },

      commandViewAppear() {
        store.commit('viewToggle', {targetView: 'commandView', isShow: true})
      },
      detailViewAppear() {
        store.commit('viewToggle', {targetView: 'detailView', isShow: true})
      },
      commandViewDisappear() {
        store.commit('viewToggle', {targetView: 'commandView', isShow: false})
      },
      detailViewDisappear() {
        store.commit('viewToggle', {targetView: 'detailView', isShow: false})
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
        axios.post(`/flows.json`, {
          flow: {
            name: this.newFlow
          }
        })
          .then(response => {
            this.newFlow = ''
            store.commit('addFlow', response.data)
          })
          .catch(error => {
            alert('エラーが発生しました。')
          })
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
      },

      newCommandForm() {
        this.detailEditable = true
        this.editCommand = {
          id: null,
          name: '',
          description: '',
          command: ''
        }
        this.detailViewAppear()
      },

      openEditCommandForm() {
        this.detailEditable = true
        this.editCommand = store.state.command
      },

      // FIXME storeのcommandが残ってしまうバグあり
      postCommand(flowId) {
        axios.post(`/flows/${flowId}/commands.json`, {
          command: {
            name: this.editCommand.name,
            description: this.editCommand.description,
            command: this.editCommand.command
          }
        })
          .then(response => {
            this.editCommand = {
              name: '',
              description: '',
              command: ''
            }
            store.commit('addCommand', response.data)
          })
          .catch(error => {
            alert('エラーが発生しました。')
          })
      },

      updateCommand(flowId, commandId) {
        axios.put(`/flows/${flowId}/commands/${commandId}.json`, {
          command: {
            name: this.editCommand.name,
            description: this.editCommand.description,
            command: this.editCommand.command
          }
        })
          .then(response => {
            this.editCommand = {
              name: '',
              description: '',
              command: ''
            }
            store.commit('updateCommand', response.data)
          })
          .catch(error => {
            alert('エラーが発生しました。')
          })
      },

    },

  })
})

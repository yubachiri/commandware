import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(Vuex);

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#app',
    store,

    data: {
    },

    computed: {
      viewGrid: function () {
        return store.getters.viewGrid
      },
      commandViewVisible: function(){
        return store.state.commandViewVisible
      },
      detailViewVisible: function(){
        return store.state.detailViewVisible
      }
    },

    methods: {
      commandViewToggle() {
        store.commit('viewToggle', {targetView: 'commandView'})
      },
      detailViewToggle() {
        store.commit('viewToggle', {targetView: 'detailView'})
      }
    },

  })
})

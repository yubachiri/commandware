import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import App from '../app.vue'
import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(Vuex);

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#app',
    store,
    data: {
      message: store.getters.messageGetter,
      counter: store.state.counter
    }
  })
})

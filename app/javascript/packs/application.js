import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import store from '../store/index';
import App from '../app.vue'
import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(Vuex);

document.addEventListener('turbolinks:load', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    store,
    render: h => h(App)
  })
})

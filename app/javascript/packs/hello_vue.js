import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import TurbolinksAdapter from 'vue-turbolinks'

document.addEventListener('turbolinks:load', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(App)
  })
})

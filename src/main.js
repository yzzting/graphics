import Vue from 'vue'
import App from './App'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

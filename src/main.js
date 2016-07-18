import Vue from 'vue'
import App from './App'
import Hljs from 'highlight.js'
import Material from 'vue-material'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)
Material.regAll(Vue)
import 'materialize-css/dist/css/materialize.css'
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

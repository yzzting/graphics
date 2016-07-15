import Vue from 'vue'
import App from './App'
import Hljs from 'highlight.js'
import Material from 'vue-material'

Material.regAll(Vue)
import 'materialize-css/dist/css/materialize.css'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

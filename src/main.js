import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/index.js'
import Multiselect from 'vue-multiselect'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import { FormFilePlugin } from 'bootstrap-vue'
Vue.use(FormFilePlugin)
Vue.component('multiselect', Multiselect)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router, // <- ésta linea es la que se modifica.
  render: (h) => h(App)
}).$mount('#app')

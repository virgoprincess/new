import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from '@/routes.js'
import GAuth from 'vue-google-oauth2'
import store from '@/store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.use( BootstrapVue )
Vue.use( IconsPlugin )

const gauthOption = {
  clientId: '297577095455-7fjh38cdku1b866cokcssdskfuk55e7e.apps.googleusercontent.com',
  /* 297577095455-7fjh38cdku1b866cokcssdskfuk55e7e.apps.googleusercontent.com --for github*/
  /* 297577095455-hqdgjabkt1uh7ckdnaagpol7fe3tbal5.apps.googleusercontent.com --for local */
  scope: 'profile email',
  prompt: 'consent',
 /*  fetch_basic_profile: true, */
}
Vue.use(GAuth, gauthOption)

new Vue({
  
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')

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
  apikey:'AIzaSyC-ly6_3Z_r0HYDzUOvIhmF03rs8Nh2-x4',
  clientId: '297577095455-7fjh38cdku1b866cokcssdskfuk55e7e.apps.googleusercontent.com',
  /* 297577095455-7fjh38cdku1b866cokcssdskfuk55e7e.apps.googleusercontent.com --for github*/
  /* 297577095455-hqdgjabkt1uh7ckdnaagpol7fe3tbal5.apps.googleusercontent.com --for local */
  scope: 'profile email https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/contacts.other.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file',
  discoverdocs:['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest', 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest'],
  prompt: 'consent',
  fetch_basic_profile: true,
}
Vue.use(GAuth, gauthOption)

new Vue({
  
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')

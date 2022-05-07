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
  apikey:process.env.VUE_APP_API_KEY,
  clientId: process.env.VUE_APP_CLIENT_ID,
 
  scope: 'profile https://mail.google.com/ https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/contacts.other.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/gmail.readonly',
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

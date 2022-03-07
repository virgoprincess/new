import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/DashboardComponent.vue'
import Messages from './views/MessagesComponent.vue'
import Email from './views/EmailComponent.vue'
import Calendar from './views/CalendarComponent.vue'
import Contacts from './views/ContactsComponent.vue'
import Storage from './views/StorageComponent.vue'
import Settings from './views/SettingsComponent.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[    
        {
            path:'/',
            name: 'dashboard',
            component:Dashboard,
        },
        {
            path:'/messages',
            name: 'messages',
            component:Messages,
        },
        {
            path:'/email',
            name: 'email',
            component:Email,
        },
        {
            path:'/calendar',
            name: 'calendar',
            component:Calendar,
        },
        {
            path:'/contacts',
            name: 'contacts',
            component:Contacts,
        },
        {
            path:'/storage',
            name: 'storage',
            component:Storage,
        },
        {
            path:'/settings',
            name: 'settings',
            component:Settings,
        },
        {
            path:'*',
            redirect:{name:'dashboard'}
        }
           
    ]
})
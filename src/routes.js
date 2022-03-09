import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/DashboardView.vue'
import Messages from './views/MessagesView.vue'
import Email from './views/EmailView.vue'
import Contacts from './views/ContactsView.vue'
import Storage from './views/StorageView.vue'
import Settings from './views/SettingsView.vue'
import Calendar from './views/CalendarView.vue'
import Login from './views/LoginView.vue'
import Home from './MainComponent.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[ 
        
        {
            path:'/',
            name: 'login',
            component:Login,
        },   
        {
            path:'/home',
            name: 'home',
            component:Home,
            children:[
                {
                    path:'dashboard',
                    name: 'dashboard',
                    component:Dashboard,
                },
                {
                    path:'messages',
                    name: 'messages',
                    component:Messages,
                },
                {
                    path:'email',
                    name: 'email',
                    component:Email,
                },
                {
                    path:'calendar',
                    name: 'calendar',
                    component:Calendar,
                },
                {
                    path:'contacts',
                    name: 'contacts',
                    component:Contacts,
                },
                {
                    path:'storage',
                    name: 'storage',
                    component:Storage,
                },
                {
                    path:'settings',
                    name: 'settings',
                    component:Settings,
                },
            ]
        },
        
        /* {
            path:'*',
            redirect:{name:'dashboard'}
        } */
           
    ]
})
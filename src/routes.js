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

import AccountSettings from './components/settings/AccountSettings.vue'
import AdministrationSettings from './components/settings/AdministrationSettings.vue'
import AnalyticsSettings from './components/settings/AnalyticsSettings.vue'
import BillingSettings from './components/settings/BillingSettings.vue'
import InvitationSettings from './components/settings/InvitationsSettings.vue'
import ManageUsersSettings from './components/settings/ManageUsersSettings.vue'
import OverviewSettings from './components/settings/OverviewSettings.vue'
import PermissionsSettings from './components/settings/PermissionsSettings.vue'
import ProfileSettings from './components/settings/ProfileSettings.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[ 
        
        {
            path:'/login',
            name: 'login',
            component:Login,
        },   
        {
            path:'/',
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
                    path:'emails',
                    name: 'emails',
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
                    children:[
                        {
                            path:'/settings/account',
                            name: 'account',
                            component:AccountSettings,
                        },
                        {
                            path:'/settings/administration',
                            name: 'administration',
                            component:AdministrationSettings,
                        },
                        {
                            path:'/settings/analytics',
                            name: 'analytics',
                            component:AnalyticsSettings,
                        },
                        {
                            path:'/settings/billings',
                            name: 'billings',
                            component:BillingSettings,
                        },
                        {
                            path:'/settings/invitations',
                            name: 'invitations',
                            component:InvitationSettings,
                        },
                        {
                            path:'/settings/manageusers',
                            name: 'manageusers',
                            component:ManageUsersSettings,
                        },
                        {
                            path:'/settings/overview',
                            name: 'overview',
                            component:OverviewSettings,
                        },
                        {
                            path:'/settings/permissions',
                            name: 'permissions',
                            component:PermissionsSettings,
                        },
                        {
                            path:'/settings/profile',
                            name: 'profile',
                            component:ProfileSettings,
                        },
                    ]
                },
            ]
        },
        
        /* {
            path:'*',
            redirect:{name:'dashboard'}
        } */
           
    ]
})
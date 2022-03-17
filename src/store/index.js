import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        menu:'DASHBOARD',
        isSignedIn:false,
        userProfile:null,
        dashboard:[],
        messages:[],
        emails:[],
        calendar:[],
        contacts:[],
        storage:[],
        settings:[],

    },
    getters:{
        GET_CURRENTMENU:state =>state.menu,
        GET_USERINFO:state =>state.userProfile,
        GET_DASHBOARD:state =>state.dashboard,
        GET_MESSAGES:state =>state.messages,
        GET_EMAILS:state => state.emails,
        GET_CALENDAR:state => state.calendar,
        GET_CONTACTS:state => state.contacts,
        GET_STORAGE:state => state.storage,
        GET_SETTINGS:state => state.settings,
    },
    mutations:mutations,
    actions:actions,

}
);
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        menu:'DASHBOARD',
        slackCode:'',
        isAddNew:false,
        composedInfo:null,
        isLoading:false,
        isSignedIn:false,
        accessToken:'',
        userId:'gladyspepito08@gmail.com',
        userProfile:null,
        dashboard:[],
        messages:[],
        messageThreads:[],
        emailThreads:[],
        emails:[],
        calendarEvents:[],
        contacts:[],
        storage:[],
        settings:[],
    },
    getters:{
        GET_ACCESS_TOKEN:state =>state.accessToken,
        GET_CURRENTMENU:state =>state.menu,
        GET_USERINFO:state =>state.userProfile,
        GET_DASHBOARD:state =>state.dashboard,
        GET_MESSAGES:state =>state.messages,
        GET_MESSAGE_THREADS:state => state.messageThreads,
        GET_THREADS:state => state.emailThreads,
        GET_EMAILS:state => state.emails,
        GET_CALENDAR:state => state.calendar,
        GET_CONTACTS:state => state.contacts,
        GET_STORAGE:state => state.storage,
        GET_SETTINGS:state => state.settings,
        GET_LOADER:state => state.isLoading,
        GET_ISADDNEW:state => state.isAddNew,
        GET_COMPOSEDINFO:state => state.composedInfo,
        GET_CALENDAREVENTS:state => state.calendarEvents,
    },
    mutations:mutations,
    actions:actions,

}
);
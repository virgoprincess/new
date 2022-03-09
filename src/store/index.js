import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        menu:'dashboard',
    },
    getters:{
        getCurrentMenu:state =>state.menu,
    },
    
    mutations:mutations,
    actions:actions,

}
);
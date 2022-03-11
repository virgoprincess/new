export default{
   SET_CURRENTMENU(state,payload){
      console.log("mutation.js :::");
      state.menu = payload;
   },
   SET_DASHBOARD(state,payload){
      state.dashboard = payload;
   },
   SET_MESSAGES(state,payload){
      state.messages = payload;
   },
   SET_EMAILS(state,payload){
      state.emails = payload;
   },
   SET_CALENDAR(state,payload){
      state.calendar = payload;
   },
   SET_CONTACTS(state,payload){
      state.contacts = payload;
   },
   SET_STORAGE(state,payload){
      state.storage = payload;
   },
   SET_SETTINGS(state,payload){
      state.settings = payload;
   },
}
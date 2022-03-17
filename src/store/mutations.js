export default{
   SET_CURRENTMENU(state,payload){
      state.menu = payload;
   },
   SETUSER_ACCOUNT(state,payload){
      state.userProfile = payload;
      payload ? state.isSignedIn = true : state.isSignedIn = false;
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
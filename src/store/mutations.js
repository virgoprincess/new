export default{
   SET_RESET(state,payload){
      state.menu='DASHBOARD';
      state.isSignedIn=false;
      state.accessToken='';
      state.userId='gladyspepito08@gmail.com';
      state.userProfile=null;
      state.dashboard=[];
      state.messages=[];
      state.threads=[];
      state.emails=[];
      state.calendar=[];
      state.contacts=[];
      state.storage=[];
      state.settings=[];
   },
   SET_CURRENTMENU(state,payload){
      state.menu = payload;
   },
   SETUSER_ACCOUNT(state,payload){
      state.userProfile = payload;
      payload ? state.isSignedIn = true : state.isSignedIn = false;
   },
   SET_LOADER(state,payload){
      state.isLoading = payload;
   },
   SET_USER_ID(state,payload){
      state.userId = payload;
   },
   SET_ACCESS_TOKEN(state,payload){
      state.accessToken = payload;
   },
   SET_DASHBOARD(state,payload){
      state.dashboard = payload;
   },
   SET_MESSAGES(state,payload){
      state.messages = payload;
   },
   SET_THREADBYID(state,payload){
      state.threads = payload;
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
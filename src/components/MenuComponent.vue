<template>
  <div id="menu">
    <div class="top-menu">
      <b-row align-h="end">
        <b-col cols="2" class="add-new p-0">
          <b-button-group @click="addNew">
            <b-button variant="outline-primary">
              <!-- <b-icon-plus /> -->
              <b-img :src="require('@/assets/icons/v1/Sphyr_add.svg')" alt=""/> Add New
            </b-button>
          </b-button-group>
        </b-col>
        <b-col cols="1" class="profile d-flex justify-content-center align-items-center p-0" @click="showProfileOptions = !showProfileOptions">
          <b-icon-dot></b-icon-dot>
          <b-img
            rounded="circle"
            :src="userProfile ? userProfile.imageUrl : ''"
            alt="default"
          />
          <b-icon-chevron-down stroke="black" stroke-width="2"/>
        </b-col>
      </b-row>
    </div>


    <b-list-group class="profile-options" v-if="showProfileOptions" @mouseleave="showProfileOptions = !showProfileOptions">
      <b-list-group-item class=" profile-status">
          <b-img rounded :src="userProfile ? userProfile.imageUrl : ''" alt="profile.png"></b-img>
          <div>
            <p>{{userProfile ? userProfile.name : ''}}</p>
            <b-icon-clock-history/>Away
          </div>
      </b-list-group-item>
      <b-list-group-item >
        <p @click="showProfileOptions = !showProfileOptions">Set yourself as <span class="fw-600">away</span></p>
        <p @click="showProfileOptions = !showProfileOptions">Pause notifications</p>
      </b-list-group-item>
      <b-list-group-item >
        <p @click="showProfileOptions = !showProfileOptions">Profile</p>
        <p @click="showProfileOptions = !showProfileOptions">Preferences</p>
      </b-list-group-item>
      <b-list-group-item><p @click="showProfileOptions = !showProfileOptions">Downloads</p></b-list-group-item>
      <b-list-group-item><p @click="showProfileOptions = !showProfileOptions; logout()">Sign out of Sphyr</p></b-list-group-item>
    </b-list-group>

    <div class="left-menu">
      <div class="menu-container">
        <ul>
          <b-img
            class="logo"
            :src="require('@/assets/images/sphyr-logo2.png')"
            alt="Left image"
          ></b-img>
          <li @click="menuClicked('DASHBOARD')" :class="menu == 'DASHBOARD'? 'menu-active': 'menu-inactive'">
            <b-img :src="require('@/assets/icons/v1/Sphyr_dashboard.svg')" alt=""/>
          </li>
          <li @click="menuClicked('MESSAGES')" :class="menu == 'MESSAGES'? 'menu-active': 'menu-inactive'">
            <!-- <b-icon-chat-dots></b-icon-chat-dots> -->
            <b-img :src="require('@/assets/icons/v1/Sphyr_chat.svg')" alt=""/>
          </li>
          <li @click="menuClicked('EMAILS')" :class="menu == 'EMAILS'? 'menu-active': 'menu-inactive'">
            <!-- <b-icon-envelope></b-icon-envelope> -->
            <b-img :src="require('@/assets/icons/v1/Sphyr_messages.svg')" alt=""/>
          </li>
          <li @click="menuClicked('CALENDAR')" :class="menu == 'CALENDAR'? 'menu-active': 'menu-inactive'">
            <!-- <b-icon-calendar4></b-icon-calendar4> -->
            <img :src="require('@/assets/icons/v1/Sphyr_calendar-04.svg')" alt=""/>
          </li>
          <li @click="menuClicked('CONTACTS')" :class="menu == 'CONTACTS'? 'menu-active': 'menu-inactive'">
            <!-- <b-icon-people></b-icon-people> -->
            <b-img :src="require('@/assets/icons/v1/Sphyr_users.svg')" alt=""/>
          </li>
          <li @click="menuClicked('STORAGE')" :class="menu == 'STORAGE'? 'menu-active': 'menu-inactive'">
            <b-icon-folder2></b-icon-folder2>
            <!-- <img :src="require('@/assets/icons/v1/Sphyr_storage.svg')" alt=""> -->
          </li>
          <li @click="menuClicked('SETTINGS')" :class="menu == 'SETTINGS'? 'menu-active': 'menu-inactive'">
            <b-icon-gear></b-icon-gear>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
import { accountType } from './../utils/enum';
export default {
  name: "MenuComponent",
  data(){
    return{
      reroute:false,
      showProfileOptions:false,
    }
  },
  created(){
    this.initialLoad();
  },
  methods:{
    addNew(){
      this.$store.state.isAddNew = true;
    },
    async logout(){
      try {
            localStorage.clear();
            const result = await this.$gAuth.signOut();
            this.$router.push({path:'/login'}) 
            this.$store.dispatch("SETUSER_ACCOUNT",null);
            this.$store.dispatch("SET_CURRENTMENU",'DASHBOARD');
            console.log("User logged out::: ",result);
          }catch (error) {
              console.log("Failed to Log Out::",error);
          }
    },
    initialLoad(){
      if(this.$store.state.isSignedIn ) this.$store.dispatch("SET_"+this.$store.state.menu);
    },
    menuClicked(menu){
        
        this.$store.commit("SET_LOADER",true);
        (this.menu != menu && this.$route.path != '/'+menu.toLowerCase()) ? this.reroute = true : this.reroute = false;
        this.$store.dispatch("SET_CURRENTMENU",menu);    
        console.log("User Profile::", this.userProfile.accountType === accountType.GOOGLE)    
        if( this.userProfile.accountType === accountType.GOOGLE || menu == 'DASHBOARD') this.$store.dispatch("SET_"+menu);
        if( this.reroute ) this.$router.push({path: '/'+menu.toLowerCase()});
        
        localStorage.setItem("currentPath",menu.toLowerCase());
    }
  },
  computed:{
    ...mapGetters({
      menu : "GET_CURRENTMENU",
      userProfile : "GET_USERINFO",
    }),

  },
  watch:{
    userProfile(){
      if(this.$store.state.isSignedIn ) this.$store.dispatch("SET_"+this.$store.state.menu);
    }
  }
};
</script>

<style lang="scss" scoped>
#menu {
  width: 100%;
  margin: auto;
  height: 75px;
  position: relative;
}
/* .top-menu{
  height: 100px;
} */
.top-menu > .row {
  max-width: 1920px;
  position: fixed;
  align-content: center;
  /* gap: 20px; */
  align-items: center;
  padding-right: 25px;
  z-index: 1;
  margin: 0 5px;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid $light-gray;
}
.profile{
  cursor: pointer;
}
.left-menu {
  position: fixed;
  background-color: #fff;
  margin: auto;
  height: 100%;
  width: 75px;
  top: 0;
  /* left: 0; */
  /* margin-left:-15px; */
  z-index: 51;

  .logo {
    padding: 20px 0;
  }
  .menu-container {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    ul,
    li {
      cursor: pointer;
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      a{ line-height: 0; }
    }
    ul li:not(:first-child) {
      padding: 10px;
    }
  }
  img,svg {
    width: 23px;
    min-height: 23px;
    height: auto;
    color: $dark-gray;
  }
}
.bi-dot{
  width: 50px;
  height: 50px;
  color: $bright-green;
}
.menu-active {

  border: 1px solid $light-blue;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  svg {
    color: $light-blue;
    transition: color 0.15s ease-in;
    /* transition-duration: 0.10s; */
  }
  img{
         /* filter: invert(12%) sepia(108%) saturate(5841%) hue-rotate(173deg) brightness(108%) contrast(153%); */
    @extend .blue-svg;
    transition: filter 0.15s ease-in;
  }
}
.menu-inactive{
  border: none;
  border-radius:0
  svg {
    color: $dark-gray;
  }
}
.logo{ width: 45px !important; }
.profile img {
  width: 33px;
  margin-right:10px;
  margin-left: -10px;
}
b-icon-search {
  width: 20px;
}
.add-new {
  text-align: right;
  .btn-group {
    align-items: center;
    width: 108.61px;
    button, button:hover{
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 5px;
      border: 2px solid $blue;
      background-color: transparent;
      color: $black;
      font-weight: 600;
      border-radius: 5px;
    }
  }
  img {
    font-size: 25px !important;
    width: 12px;
    height: 12px;
    @extend .dark-blue-svg;
  }
}
::placeholder {
  color: $gray !important;
}
.search {
  input {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 400;
    border: none;
  }
  svg {
    color: $gray;
  }
  > div {
    align-items: center;
    gap: 10px;
  }
}

.bi-chevron-down{
  cursor: pointer;
  width: 12px;
  height: 12px;
}
.profile-options{
  margin-right: 2%;
  top: 74px;
  font-size: 14px;
  font-weight: 500;
  width: 300px;
  box-shadow: 2px 2px 8px #00000029 !important;
  right: 0;
  border: 1px solid $lighter-gray;
  z-index: 11;
  border-radius: 5px;
  position: absolute;

  p{margin: 0;}
  img{
    width: 40px;
    height: 40px;
  }
  .list-group-item:first-child{
    padding-top: 20px;
  }
  .list-group-item:last-child{
    border-bottom: 0;
  }
  .list-group-item{ 
    background-color: $background-color; 
    border-left: 0;
    border-right: 0;
    padding: 10px 0;
    cursor: default;
    p{ padding: 5px 25px 5px 25px; }
    > img{ margin:0 10px 0 25px; }
    }

 .list-group-item:not(:first-child){
     p:hover{background-color: $blue; color: #fff; cursor: pointer;}
 }
 .profile-status{
    display: flex;
    p{padding: 0};

    svg{ margin-right: 5px; color: $bright-yellow;}
  }
}
</style>
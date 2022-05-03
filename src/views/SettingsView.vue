<template>
  <div class="settings-component">
      <div class="settings-menu">
        <h5>Settings</h5>
        <b-list-group>
          <b-list-group-item @click="menuClicked('account')" :class="menu === 'account'? 'menu-active':'menu-inactive'">Account</b-list-group-item>
          <b-list-group-item @click="menuClicked('profile')" :class="menu === 'profile'? 'menu-active':'menu-inactive'">Profile</b-list-group-item>
          <b-list-group-item @click="menuClicked('analytics')" :class="menu === 'analytics'? 'menu-active':'menu-inactive'">Analytics</b-list-group-item>
          <b-list-group-item @click="menuClicked('overview')" :class="menu === 'overview'? 'menu-active':'menu-inactive'">Overview</b-list-group-item>
        </b-list-group>

        <h5>Administration</h5>
        <b-list-group>
          <b-list-group-item @click="menuClicked('administration')" :class="menu === 'administration'? 'menu-active':'menu-inactive'">Settings</b-list-group-item>
          <b-list-group-item @click="menuClicked('permissions')" :class="menu === 'permissions'? 'menu-active':'menu-inactive'">Permissions</b-list-group-item>
          <b-list-group-item @click="menuClicked('manageusers')" :class="menu === 'manageusers'? 'menu-active':'menu-inactive'">Manage Users</b-list-group-item>
          <b-list-group-item @click="menuClicked('invitations')" :class="menu === 'invitations'? 'menu-active':'menu-inactive'">Invitations</b-list-group-item>
          <b-list-group-item @click="menuClicked('billings')" :class="menu === 'billings'? 'menu-active':'menu-inactive'">Billing</b-list-group-item>
        </b-list-group>

        <div class="slack-btn">
          <a href="https://slack.com/openid/connect/authorize?scope=openid&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8080&amp;client_id=3208850616742.3469803502515" style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:16px;font-weight:600;height:48px;justify-content:center;text-decoration:none;width:48px"><svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;margin-right:0" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg></a>
        </div>
      </div>
      <div class="settings-content">
        <router-view/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name:'SetttingsComponent',
    data(){
      return{
      }
    },
    created(){
      this.$router.push({path: '/settings/account'})
    },
    mounted(){
      this.$store.commit("SET_LOADER",false);
    },
    methods:{
      menuClicked(menu){
        console.log("current route:::",this.$route.path)
        console.log("destination route:::",'/settings/'+menu.toLowerCase())
        this.$store.dispatch("SET_CURRENTMENU",menu);      
        if(this.$route.path != '/settings/'+ menu.toLowerCase()) this.$router.push({path: '/settings/'+menu.toLowerCase()})
      },
      /* async signInSlack(){
        await axios.get('https://slack.com/openid/connect/authorize?response_type=code&scope=openid%20profile%20email&client_id=3208850616742.3469803502515&redirect_uri=https://virgoprincess.github.io/').then(res=>{
          console.log("Res Slack:::",res)
        })
      } */
    },
    computed:{
      ...mapGetters(
        {
          menu : "GET_CURRENTMENU",
        }
      )
    },
}
</script>

<style lang="scss" scoped>
.settings-component::v-deep{
  display: flex;
  h5{
    font-weight: 600;
  }
  .btn-save{
    width: 100px;
    height: 35px;
    background-color: $blue !important;
    border: 0;
    color: white;
  }
}
.settings-menu::v-deep{
  width: 20%;
  position: relative;
  height: 86vh;
  background-color: #fff;
  padding: 20px 10px;
  /* padding: 20px 50px; */
  
  .list-group-item{
    border: 0;
   }
   .list-group-item:hover{
     cursor: pointer;
   }
}
.settings-content{
  width: 70%;
  max-height: 86vh;
}
.settings-menu::v-deep{
  .list-group-item{
    padding-left: 75px;
    border-radius: 5px;
    font-size: 12px;
    color: $gray;
    font-weight: 600;
  }
  /* .list-group-item:hover,.list-group-item:focus{
    background-color: $lighter-gray;
  } */
  .list-group-item:last-child{
    margin-bottom: 50px;
  }
  h5{padding-left: 55px;}
  
  .menu-active{
    background-color: $lighter-gray;
  }
  /* .menu-inactive{
    background-color:transparent;
  } */
}
.settings-content::v-deep{
   padding: 30px 50px;
   .row{
         border-bottom: 1px solid $lighter-gray;
    margin-bottom: 5px;
   }
   .btn-outline{ color: $black; }
  .dropdown-menu{width:100% !important;}
   .btn-secondary{ background-color: transparent; border-color: $gray;}
   .dropdown-toggle{background-color: #fff; border-color: $light-gray; height: 40px; text-align: left; color: $black;}
   .dropdown-toggle:hover,.dropdown-item{ color: $black !important; font-size: 12px;}
   .dropdown-menu{left: 4px !important; padding-left: 0;}
   .desc{color: $gray; font-weight: 500;}
   .col{padding: 0;}
   .row{padding: 10px 0; margin-top: 0; gap: 20px; align-items: center;}
   label,p{font-size: 12px; font-weight: 700;}
   button{font-size: 12px; font-weight: 600; width: 250px; height: 40px;}
   p{margin: 0;}
   input{ padding: 10px 20px; font-size: 12px;height: 44px; color: $black; }
   input::placeholder{ font-style: italic; font-weight: 600; }
   .custom-control{display: flex; align-items: center;}
   .custom-control-input{ vertical-align: top;width: 20px; height: 20px; margin-right: 10px;}
   .custom-control-label > p:first-child{ font-weight: 600; }
   th{color: $gray;}
   .btn-fit{ width: fit-content; }
    a{font-size: 12px; text-decoration: none;}

  .tabletable-bordered{ width: 100%; }
  table {
  border-collapse: separate;
  border-spacing: 0 15px;
  }
  
  th,
  td {
    font-size: 12px; font-weight: 600;
    text-align: left;
    border-bottom: 1px solid $lighter-gray;
    padding: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  th {
    position: sticky;
    position: -webkit-sticky;
    background-color: $background-color;
    top: 0;
  }
  .red-highlight{
    color: $brown;
    background-color:$light-brown;
  }
  .green-highlight{ 
    color: $medium-green;
    background-color:$light-green;
   }
  .member-status,.billing-status{
    font-weight: 600;
    width: fit-content;
    text-align: center;
    padding: 5px 10px;
    border-radius: 90px;
  }
}
.slack-btn{ text-align: center; }
</style>
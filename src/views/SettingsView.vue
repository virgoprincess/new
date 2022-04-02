<template>
  <div class="settings-component">
      <div class="settings-menu">
        <h5>Settings</h5>
        <b-list-group>
          <b-list-group-item @click="menuClicked('account')">Account</b-list-group-item>
          <b-list-group-item @click="menuClicked('profile')">Profile</b-list-group-item>
          <b-list-group-item @click="menuClicked('analytics')">Analytics</b-list-group-item>
          <b-list-group-item @click="menuClicked('overview')">Overview</b-list-group-item>
        </b-list-group>

        <h5>Administration</h5>
        <b-list-group>
          <b-list-group-item @click="menuClicked('administration')">Settings</b-list-group-item>
          <b-list-group-item @click="menuClicked('permissions')">Permissions</b-list-group-item>
          <b-list-group-item @click="menuClicked('manageusers')">Manage Users</b-list-group-item>
          <b-list-group-item @click="menuClicked('invitations')">Invitations</b-list-group-item>
          <b-list-group-item @click="menuClicked('billings')">Billing</b-list-group-item>
        </b-list-group>
      </div>
      <div class="settings-content">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
    name:'SetttingsComponent',
    methods:{
      menuClicked(menu){
        this.$router.push({path: '/settings/'+menu.toLowerCase()})
      }
    }
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
  .list-group-item:hover,.list-group-item:focus{
    background-color: $lighter-gray;
  }
  .list-group-item:last-child{
    margin-bottom: 50px;
  }
  h5{padding-left: 55px;}
}
.settings-content::v-deep{
   padding: 30px 50px;
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
    border-bottom: 1px solid $light-gray;
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
  .pending{
    color: $brown;
    background-color:$light-brown;
  }
  .accepted,.paid{ 
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
</style>
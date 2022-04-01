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
/*     data(){
      return{
        menu:'settings'
      }
    },
    mounted(){
      this.$store.dispatch("SET_CURRENTMENU",this.menu)
    } */
}
</script>

<style lang="scss" scoped>
.settings-component{
  display: flex;
}
.settings-menu{
  width: 20%;
  position: relative;
}
.settings-content{
  width: 70%;
  max-height: 86vh;
}
.settings-content::v-deep{
  .dropdown-menu{width:100% !important;}
   .btn-secondary{ background-color: transparent; border-color: $gray;}
   .dropdown-toggle{background-color: #fff; border-color: $light-gray; height: 40px; text-align: left;}
   .desc{color: $gray; font-weight: 500;}
   .col{padding: 0;}
   .row{padding: 10px 0; margin-top: 0; gap: 20px; align-items: center;}
   label,p{font-size: 12px; font-weight: 700;}
   button{font-size: 12px; font-weight: 600; width: 250px; height: 40px;}
   p{margin: 0;}
   input{ padding: 10px 20px; font-size: 12px;height: 44px; }
   input::placeholder{ font-style: italic; font-weight: 600; }
   .custom-control{display: flex; align-items: center;}
   .custom-control-input{ vertical-align: top;width: 20px; height: 20px; margin-right: 10px;}
   .custom-control-label > p:first-child{ font-weight: 600; }
}
</style>
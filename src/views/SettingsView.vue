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
  width: 30%;
  position: relative;
}
.settings-content{
  width: 70%;
}
</style>
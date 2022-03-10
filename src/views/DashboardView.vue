<template>
  <div class="dashboard-component" >
      <div class="dashboard-left scrollable">
          <newsfeed-component/>
          <newsfeed-component/>
          <newsfeed-component/>
      </div>
      <div class="dashboard-right scrollable">
          <notifications-component/>
      </div>

  </div>
</template>

<script>
import NewsfeedComponent from '../components/dashboard/NewsfeedComponent.vue'
import NotificationsComponent from '../components/dashboard/NotificationsComponent.vue'


export default {
  components: { NewsfeedComponent, NotificationsComponent },
    name:"DashboardComponent",
}
</script>

<style lang="scss" scoped>
.dashboard-component{
    width: 80%;
    margin: auto;
    position: relative;
    display: flex;
    padding: 20px 0;
    gap: 20px;
    .dashboard-left{
        width: 62%;
    }
    /* .dashboard-right{
        width: 25%;
    } */
    /* .dashboard-left, .dashboard-right{
        overflow: hidden;
        overflow-y:scroll;
    }
    .dashboard-left::-webkit-scrollbar{
        display: none;
    } */
}
</style>
<style lang="scss">
.left-menu{
    #dashboard-menu{
       @extend .menu-active !optional;
    }
}
</style>
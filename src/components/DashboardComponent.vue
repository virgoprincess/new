<template>
  <div class="dashboard-component" >
      <div class="dashboard-left">
          <newsfeed-component/>
          <newsfeed-component/>
          <newsfeed-component/>
      </div>
      <div class="dashboard-right">
          <notifications-component/>
      </div>

  </div>
</template>

<script>
import NewsfeedComponent from './dashboard/NewsfeedComponent.vue'
import NotificationsComponent from './dashboard/NotificationsComponent.vue'
export default {
  components: { NewsfeedComponent, NotificationsComponent },
    name:"DashboardComponent"

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
}
</style>
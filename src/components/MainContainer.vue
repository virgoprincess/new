
<template>
  <div class="canvass">
    <div class="content">
      <!-- <dashboard-component/>
      <messages-component/> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
/* import DashboardComponent from './DashboardComponent.vue'
import MessagesComponent from './MessagesComponent..vue' */

export default {
 /*  components: { DashboardComponent, MessagesComponent }, */
    name:'MainContainer',
}
</script>


<style lang="scss">

.canvass{
  padding: 100px 0 0 100px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: $background-color;

  .content{
    width: 100%;
    height: 100%;
    border-left: 1px solid $light-gray;
  }
}
</style>
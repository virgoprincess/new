<template>
  <div class="dashboard-component" >
      <div class="dashboard-left scrollable" >
          <newsfeed-component v-for="(result,i) in results" :key="i" :data="result" @hideFeed="hideFeed(result)"/>          
      </div>
      <div class="dashboard-right scrollable">
          <notifications-component/>
          <dashboard-calendar-component @processed="setLoader"/>
      </div>

  </div>
</template>

<script>
import NewsfeedComponent from '../components/dashboard/NewsfeedComponent.vue'
import NotificationsComponent from '../components/dashboard/NotificationsComponent.vue'
import { mapGetters } from "vuex"
import DashboardCalendarComponent from '@/components/dashboard/DashboardCalendarComponent.vue'
export default {
  components: { 
      NewsfeedComponent, NotificationsComponent,DashboardCalendarComponent, },
    name:"DashboardComponent",
    methods:{
        hideFeed(result){
            this.results.splice(this.results.indexOf(result),1);
        },
        setLoader(){
            this.$store.commit("SET_LOADER",false);
        }
    },
    computed:{
        ...mapGetters({
            results:"GET_DASHBOARD",
        })
    }
}
</script>

<style lang="scss" scoped>
.dashboard-component{
    justify-content: center;
    width: 80%;
    margin: auto;
    position: relative;
    display: flex;
    gap: 20px;
    min-height: 86vh;
    .dashboard-left{
        padding: 20px 0;
        width: 62%;
    }
    .dashboard-right{
        padding: 20px 0;
        width: 30%;
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
<template>
  <div id="main-component" class="main">
     <search-component/>
     <menu-component/>
     <main-container/>
     
  </div>
</template>

<script>
import SearchComponent from './components/commons/SearchComponent.vue';
import MainContainer from './components/MainContainer.vue';
import MenuComponent from './components/MenuComponent.vue';
import { timeoutInMS } from "@/module/sessiontimeout" 
export default {
    name: 'MainComponent',
    components:{
        MenuComponent,
        MainContainer,
        SearchComponent
    },
    mounted(){
      if(this.$route.path != '/home/dashboard')
      this.$router.push({path:'/home/dashboard'}) 
      this.setupTimers();
    },
    beforeDestroy(){
      this.removeSessionTracker();
    },
    methods:{
      
        async handleInactive(){
          try {
                const result = await this.$gAuth.signOut();
                
                this.$router.push({path:'/'}) 
                console.log("User logged out::: ",result);
            }catch (error) {
                console.log("Failed to Sign out::");
            }
        },
        startTimer(){
            this.timeoutId = setTimeout(this.handleInactive,timeoutInMS);
        },

        resetTimer(){
         clearTimeout(this.timeoutId);
          this.startTimer();
        },
        removeSessionTracker(){
          document.removeEventListener("keypress", this.resetTimer, false);
          document.removeEventListener("mousemove", this.resetTimer, false);
          document.removeEventListener("mousedown", this.resetTimer, false);
          document.removeEventListener("touchmove", this.resetTimer, false);
        },
        setupTimers () {
        console.log("session running:::");
        document.addEventListener("keypress", this.resetTimer, false);
        document.addEventListener("mousemove", this.resetTimer, false);
        document.addEventListener("mousedown", this.resetTimer, false);
        document.addEventListener("touchmove", this.resetTimer, false);
        
        this.startTimer();
        },
    }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
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
    beforeMount(){
      if( this.$store.state.isSignedIn ){
        if(this.$route.path != '/dashboard')
        this.$router.push({path:'/dashboard'}) 
        this.setupTimers();
        this.setupBeforeUnload();
      } else
        {
        console.log("isSignedIn?:::",this.$store.state.isSignedIn);
        this.$router.push({path:'/login'}) 
        }
    },
    beforeDestroy(){
      console.log("BeforeDestroy has been called:::");
      this.removeSessionTracker();
    },
    methods:{
        async handleInactive(){
          try {
                const result = await this.$gAuth.signOut();
                this.removeSessionTracker();
                this.$router.push({path:'/login'}) 
                this.$store.dispatch('SETUSER_ACCOUNT',null);
                console.log("User logged out::: ",result);
            }catch (error) {
                console.log("Failed to Sign out::",error);
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
          console.log("session closed:::");
          window.removeEventListener('load',this.resetTimer,false)
          document.removeEventListener("keydown", this.resetTimer, false);
          document.removeEventListener("scroll", this.resetTimer, false);
          document.removeEventListener("click", this.resetTimer, false);
          document.removeEventListener("mousemove", this.resetTimer, false);
          document.removeEventListener("mousedown", this.resetTimer, false);
          document.removeEventListener("touchmove", this.resetTimer, false);
        },
        setupTimers () {
        console.log("session running:::");
        window.addEventListener('load',this.resetTimer,false);
        document.addEventListener("keydown", this.resetTimer, false);
        document.addEventListener("scroll", this.resetTimer, false);
        document.addEventListener("click", this.resetTimer, false);
        document.addEventListener("mousemove", this.resetTimer, false);
        document.addEventListener("mousedown", this.resetTimer, false);
        document.addEventListener("touchmove", this.resetTimer, false);
        
        this.startTimer();
        },
        setupBeforeUnload(){
          window.addEventListener('beforeunload',function(e){
            console.log("Page reloads or refreshed:::");
            return false;
          })
        }
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
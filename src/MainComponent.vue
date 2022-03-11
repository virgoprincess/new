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
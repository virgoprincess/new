<template>
  <div id="main-component" class="main">
     <menu-component/>
     <main-container/>
  </div>
</template>

<script>
import MainContainer from './components/MainContainer.vue';
import MenuComponent from './components/MenuComponent.vue';
/* import MenuComponent from './components/MenuComponent.vue'; */
export default {
    name: 'MainComponent',
    components:{
        MenuComponent,
        MainContainer
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
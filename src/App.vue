<template>
  <div id="app">
   <main-component/>
  </div>
</template>

<script>
import MainComponent from './MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style lang="scss">
#app {
  color: $black;
  margin:0;
  padding:0;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #fff;
}
</style>

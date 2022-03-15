<template>
  <div id="app">
    <v-app>
      <main-view-container/>
    </v-app>
  </div>
</template>

<script>
import MainViewContainer from './MainViewContainer.vue'

export default {
  name: 'App',
  components: {
    MainViewContainer
  }
}
</script>

<style lang="scss">
html, body{
  height: 100%;
  overflow: hidden;
}
#app {
  color: $black;
  padding:0;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  height: fit-content;
  position: relative;
  background-color: #fff;
}
#app::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge add Firefox */
#app{
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

.btn-group{ cursor: pointer; }
.btn:focus, input:focus { box-shadow: none !important;}
</style>

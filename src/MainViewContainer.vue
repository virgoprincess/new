<template>
  <div id="home" class="main">
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'MainViewContainer',
    data(){
      return{
        timeoutId : null,
      }
    },
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
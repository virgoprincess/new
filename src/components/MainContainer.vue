
<template>
  <div class="canvass">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
    name:'MainContainer',
}
</script>


<style lang="scss">

.canvass{
  padding:0 0 0 100px;
  z-index: -1;
  width: 100%;
  height: 86vh;
  max-height: 88vh;
  background-color: $background-color;

  .content{
    width: 100%;
    height: 100%;
    border-left: 1px solid $light-gray;
    >div{
          max-height: 86vh;
    }
  }
}
</style>
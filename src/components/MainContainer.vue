
<template>
  <div class="canvass">
    <b-overlay :show="show" rounded="sm" opacity="1" class="loader">
      <div class="content">
        <router-view/>
      </div>
    </b-overlay>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
    name:'MainContainer',
    /* data(){
      return{
        show:true,
      }
    }, */
    computed:{
      ...mapGetters({
        show:'GET_LOADER'
      }),
    }
}
</script>


<style lang="scss">
.loader{height: 86vh;}
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
    b-overlay{
      overflow: scroll;
    }
  }
}
</style>
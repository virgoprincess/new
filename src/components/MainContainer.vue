
<template>
  <div class="canvass d-flex" :class="showSubMenu ? 'bg-white' : ''">
    <div class="sub-menus" :class="showSubMenu ? 'slide-right' : 'slide-left'" v-if="subMenus.hasOwnProperty(menu.toLowerCase())">
        <b-list-group>
          <b-list-group-item v-for="(submenu,i) in subMenus[menu.toLowerCase()]" :key="i" class="gray-small-text">
            {{ submenu }}
          </b-list-group-item>
        </b-list-group>
      </div>
    <b-overlay :show="show" rounded="sm" opacity="1" class="loader" :style="showSubMenu && subMenus.hasOwnProperty(menu.toLowerCase()) ? 'width:85%': 'width:95%'">
      <div class="content" :class="showSubMenu && subMenus.hasOwnProperty(menu.toLowerCase()) ? 'border-radius-25':''">
        <router-view/>
      </div>
    </b-overlay>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
    name:'MainContainer',
    data(){
      return{
        subMenus:{
          messages:['Inbox','Trash'] ,
          emails:['Inbox', 'Sent', 'Drafts', 'Trash' ],
          calendar:[ 'My Calendar','Company','Holidays'],
          contacts : [ 'All', 'Internal', 'External' ] ,
          storage: [ 'Inbox', 'Trash' ] 
          }
        
      }
    },
    computed:{
      ...mapGetters({
        show:'GET_LOADER',
        menu: 'GET_CURRENTMENU',
        showSubMenu:'GET_TOGGLE_SUBMENU'
      }),
    },
    watch:{
    }
}
</script>


<style lang="scss">
.loader{
  height: 86vh;
  }
  
.border-radius-25{
  border-top-left-radius: 25px;
  border-top: 1px solid $light-gray;
  border-left: 1px solid $light-gray;
  >div{
    background-color: $background-color; 
    border-top-left-radius: 25px;
  }
  .messages-left{
      border-top-left-radius: 25px;
    }
}
.bg-white{
  background-color: #fff !important;
}
.canvass{
  margin:0 0 0 75px;
  z-index: -1;
  width: 100%;
  height: 86vh;
  max-height: 88vh;
  background-color: $background-color;
  .content{
    width: 100%;
    height: 100%;
    >div{
          max-height: 86vh;
    }
    b-overlay{
      overflow: scroll;
    }
  }
  .sub-menus{
    width: 10%;
    background-color: #fff;
    margin-left:-10%;
    > div *{
      border: 0;
    }
    .list-group-item{ padding: 7px 0; text-align: center;}
    .list-group-item:hover{ cursor: pointer; }
  }
  .slide-right{
    margin-left: 0% !important;
    transition:1s;
  }
  .slide-left{
    margin-left: -10% !important;
    transition: 1s;
  }
}
</style>
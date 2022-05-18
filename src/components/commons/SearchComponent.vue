<template>
  <div @mouseleave="clearInput()" class="search-component " :class="isSearching ? 'on-search' : 'remove-caret'">
    <div class="d-flex">
      <b-input-group >
        <div class="d-flex justify-content-center align-items-center" @click="!isSearching ? isSearching = true: ''">
          <b-icon-search />
        <b-form-input  v-model="searchedText"  :placeholder="menu != 'DASHBOARD' ? 'Search '+ menu.charAt(0).toUpperCase()+menu.slice(1).toLowerCase() : 'Search'" autocomplete="off" ></b-form-input>
        </div>
        <b-icon-x @click="isSearching = false"/>
      </b-input-group>
      <div v-show="menu === 'STORAGE' && isSearching" class="storage-buttons">
          <b-icon-file-earmark-medical-fill></b-icon-file-earmark-medical-fill>
          <b-icon-camera-video-fill></b-icon-camera-video-fill>
          <b-icon-image-fill></b-icon-image-fill>
          <div class="icon-folder">
            <b-img :src="require('@/assets/icons/v1/Sphyr-Icons_folder.png')"></b-img>
          </div>
      </div>
    </div>
    <div class="search-options">
      <p class="search-label">I'M LOOKING FOR...</p>
      <b-button-group class="d-flex justify-content-center search-categories">
        <b-button variant="none">
        <b-icon-chat-dots/> Chats
        </b-button>
        <b-button variant="none">
        <b-icon-envelope/> Emails
        </b-button>
        <b-button variant="none">
        <b-icon-calendar /> Calendar
        </b-button>
        <b-button variant="none">
        <b-icon-people /> Contacts
        </b-button>
        <b-button variant="none">
        <b-icon-folder2 /> Storage
        </b-button>
      </b-button-group>


      <p class="search-label">POPULAR TAGS</p>
      <b-button-group class="search-tags">
        <b-button variant="none">
          <b-icon-dot/>
            Project Name
        </b-button>
        <b-button variant="none">
          <b-icon-dot/>
            Templates
        </b-button>
        <b-button variant="none">
          <b-icon-dot/>
            Resources
        </b-button>
      </b-button-group>

      <p class="search-label">RECENT SEARCHES</p>
      <b-list-group  class="search-recent d-flex">
        <b-list-group-item>
          <b-img :src="require('@/assets/images/image-file.jpg')"></b-img>
          IMG3920.jpg
        </b-list-group-item>
        <b-list-group-item>
          <p>January 20</p>
        </b-list-group-item>
        <b-list-group-item>
          <p>conference room</p>
        </b-list-group-item>
      </b-list-group>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name:'SearchComponent',
  data(){
    return{
      isSearching:false,
      searchedText:"",
      isDisabled:false,
    }
  },
  methods:{
    clearInput(){
      this.searchedText= "";
      this.isSearching = false;
      this.isDisabled = true;
    }
  },
  computed:{
    ...mapGetters({
      menu:'GET_CURRENTMENU'
    })
  }
/*   watch:{
    isSearching(){
      if(!this.isSearching)this.searchedText = "";
    }
  } */

} 
</script>

<style lang="scss" scoped>
.remove-caret{ caret-color: transparent; }
.search-component{
  /* caret-color: transparent; */
  cursor: default;
  width: 350px;
  z-index: 99;
  position: absolute;
  padding: 10px;
  background-color: #fff;
  box-shadow: none;
  margin: 10px 0 0 310px;
  border-radius: 10px;
  .input-group{
    border-radius: 90px;
    box-shadow: none;
    padding: 0 20px;
    background-color: #fff;
    align-items: center;
    > div{ width: 94%; }
  }
    input {
      background-color: transparent;
      font-size: 18px;
      font-weight: 400;
      border: none;
    }
    svg {
      color: $gray;
    }
    > div {
      align-items: center;
      gap: 10px;
    }
  
.b-icon-search{ width: 20px; }
.bi-x, .search-options{ display: none; }
  .search-options{
    width: 100%;
    margin: auto;
    position: relative;
      .search-categories,.search-tags {
        width: 90%;
        gap: 4px;
      }
      .search-categories .btn{
          border-radius: 5px;
          background-color:$background-color-darker;
          svg{
             color: $dark-gray;
             width:13px; 
             height: 13px;
          }
      }
        .btn{
          justify-content: center;
          align-items: center;
          padding: 0.20em 0.40em !important;
          display: flex;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
        }
      
      .search-tags{
        width: 80%;
        gap: 8px;
        .btn{
          justify-content: left;
          gap: 0;
          border: 1px solid $lighter-gray;
          border-radius: 90px;
          svg{ font-size: 25px;}
          }
          :nth-child(1){
            svg{color: $bright-red;}
          }
          :nth-child(2){
            svg{color: $bright-yellow;}
          }
          :nth-child(3){
            svg{color: $green;}
          }
      }
      .search-recent{
        img{ width: 20px;height: 20px; }
        p{ margin: 0; }
        .list-group-item{ padding: 0.3rem 0; border: 0; font-size: 14px; font-weight: 500; }
      }
    
  }
  .search-label{
    font-size: 11px;
    font-weight: 600;
    color: $gray;
    margin: 0;
    padding: 20px 0 5px 0;

  }
  .storage-buttons{
    width: 150px;
    display: flex;
    gap: 5px;
    .bi-file-earmark-medical-fill {
      color: $dark-blue;
    }
    .bi-camera-video-fill {
      color: $yellow;
    }
    .bi-image-fill {
      color: $green;
    }
    svg{
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid $lighter-gray;
    }
    .icon-folder{
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid $lighter-gray;
      >img {
        filter: invert(12%) sepia(69%) saturate(79) hue-rotate(348deg) brightness(86%) contrast(81%);
        width: 16px;
        }
    }
  }
}
.on-search{
  /* padding: 10px; */
  min-width: 537px !important;
  height: 356px !important;
  box-shadow: 2px 2px 8px #00000029 !important;
  .bi-x, .search-options{ display: block !important; }
  .input-group{
    width: 517px;
    box-shadow: inset 0 1px 5px 0 rgb(185 185 185 / 34%) !important;
  }
}

</style>
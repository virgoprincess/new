<template>
  <div class="messages-component">
    <div class="messages-left scrollable">

      <b-list-group class="pinned">
        <div class="d-flex justify-content-between">
          <p class="blue-small-text align-content-lg-start">Pinned</p>
          <b-link class="blue-small-text align-content-end">View All</b-link>
        </div>
        <preview-component v-for="(data,i) in pinned" :key="i" :data="[data.members[0].profileInfo,data.messages[0].content,'','chat']"/>
      </b-list-group>

      <b-list-group class="today">
        <div class="d-flex justify-content-between">
          <p class="blue-small-text align-content-lg-start">Today</p>
        </div>
        <preview-component v-for="(result,i) in results" :key="i" :data="[result.members[0].profileInfo,result.messages[0].content,'','chat']"/>
      </b-list-group>

      <b-list-group class="online">
        <div class="d-flex justify-content-between">
          <p class="align-content-lg-start">Online Now</p>
        </div>
        <b-list-group-item class="d-flex gap-4 flex-wrap">
          <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
          <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
          <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
          <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
        </b-list-group-item>
      </b-list-group>

    </div>


    <div class="messages-center">
      <message-threads :data="threads.messages"/>
      <div class="send-message">
        <b-form-textarea id="textarea"
                         placeholder="Type message ..."
                         rows="3" max-rows="4"> </b-form-textarea>
                         <b-icon-paperclip></b-icon-paperclip>
          <b-icon-cursor-fill></b-icon-cursor-fill>
      </div>
    </div>

    <div class="messages-right scrollable">

      <div class="profile-info d-flex flex-column gap-3 align-items-center fs-15">
        <!-- <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
        <p class="fs-15">Bruce Scott</p>
        <div class="d-flex">
          <b-icon-telephone-fill></b-icon-telephone-fill>
          <b-icon-envelope-fill></b-icon-envelope-fill>
          <b-icon-chat-dots-fill></b-icon-chat-dots-fill>
          <b-icon-calendar-event-fill></b-icon-calendar-event-fill>
        </div> -->
        <profile-component/>
      </div>

      <div class="members">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <b-icon-plus></b-icon-plus>
            <p class="fs-26 fw-bold">{{results[0].members.length}} Members</p>
          </div>
          <b-link class="blue-small-text">View All</b-link>
        </div>

        <div class="pt-3 ps-4 d-flex flex-column gap-3">
          <contact-name v-for="(result,i) in results[0].members" :key="i" :data="result.profileInfo"/>
        </div>

      </div>  
      <div class="shared-media">
        <div class="d-flex justify-content-between align-items-center">
            <p class="fs-26 fw-bold">Shared Media</p>
          <b-link class="blue-small-text">View All</b-link>
        </div>
        <div class="d-flex flex-column gap-3">
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PreviewComponent from '../components/commons/PreviewComponent.vue'
import ContactName from '../components/commons/ContactName.vue'
import FileIconComponent from '../components/commons/attachments/FileIconComponent.vue'
import ProfileComponent from '@/components/commons/ProfileComponent.vue'

import { mapGetters } from "vuex"
import MessageThreads from '@/components/Messages/MessageThreads.vue'

export default {
  components:{PreviewComponent,ContactName,FileIconComponent, ProfileComponent, MessageThreads},
    name:'MessagesComponent',
    data(){
      return{
        pinned:[],
      }
    },
    mounted(){
      this.pinned = this.results.filter((result)=> result.pinned == 'true');
      console.log("Pinned:", JSON.stringify(this.pinned));
    },
    updated(){
      this.$store.commit("SET_LOADER",false);
    },
   computed:{
        ...mapGetters({
            results:"GET_MESSAGES",
            threads:"GET_MESSAGE_THREADS",
        })
    }
}
</script>

<style lang="scss" scoped>
.messages-component{
    width: 100%;
    margin: auto;
    position: relative;
    display: flex;
    /* gap: 20px; */

    .messages-left{ width: 25%; }
    .messages-center{
      width: 55%;
      position: relative;
      max-height: 86vh;
      .send-message{
          display: flex;
          align-items: center;
          bottom: 0;
          gap: 15px;
          height: 18%;
          border-top: 1px solid $light-gray;
          margin-top: 10px;
          padding: 0 20px;
        textarea{
          padding: 30px 50px;
          background-color: transparent;
          margin: 0px;
          font-size: 13px; border: none; overflow-y: hidden !important;
          box-shadow: none;
          resize: none;
          overflow-y: scroll;
          height: 100% !important;
          
        }
        textarea::placeholder{
            font-size: 13px; color: $gray !important;
        }
        textarea:focus{
          border:0;
        }
      }
    }
    .messages-right{ width: 20%; border-left: 1px solid $light-gray !important; }
 /*    .messages-center,.messages-left, .messages-right{ height: 100%; } */
    
    .pinned, .today, .online {
      background-color: #fff;
      > div:first-child{
      padding: 1rem 1rem 0 1rem;
      }
    }
    .online{
      border-radius: 0;
      .list-group-item{ border: none; }
      margin-top: 7px;
      padding-bottom: 20px;
      font-weight: 700;
      img{
        width: 50px;
        height: 50px;
      }
      p{
        margin: 0;
      }
    }

    .messages-right{
      height: 84vh;
        p{ margin: 0; }
      .profile-info{
        font-weight: 700;
        padding: 30px 0;
        border-bottom: 1px solid $light-gray;
      }
      .members,.shared-media{
        padding: 25px 25px 20px 10px;
        .bi-plus{
          width: 22px;
          height: 22px;
          color: $blue;
        }
      }
      .shared-media{
        padding-left: 40px;
        > div:first-child{
          padding-bottom: 25px;
        }
      }
    }
}
.bi-paperclip{
  transform: rotate(38deg);
  color: $dark-gray;
  width: 25px;
  height: auto;
}
.bi-cursor-fill{
  color: #fff;
    width: 35px;
    height: 35px;
    padding: 8px;
    border-radius: 90px 90px 90px 90px;
    @extend .gradient-blue-bg-color;
}
</style>
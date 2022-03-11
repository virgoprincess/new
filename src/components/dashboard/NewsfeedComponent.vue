<template>
  <div class="newsfeed">
      <div>
          <b-icon-envelope class="news-type-email" v-if="data.messages.type == 1"></b-icon-envelope>
          <b-icon-chat-dots class="news-type-chat" v-if="data.messages.type == 2"></b-icon-chat-dots>
      </div>
      <div class="newsfeed-info d-flex">
         <div>
             <div class="newsfeed-top">
                <contact-name :data="data.messages.profileInfo"/>
                <div class="date">
                    <div class="day">TODAY</div>
                    <div class="time">{{data.messages.time}}</div>
                </div>
            </div>
            <message-content-component :data="data.messages.messageContent"/>
            <attachments-components :data="data.messages.attachments"/>
         </div>
         <b-icon-check-circle class="check-btn" @click="$emit('hideFeed')"></b-icon-check-circle>
      </div>
      <reply-forward/>
  </div>
</template>

<script>
import ContactName from '../commons/ContactName.vue'
import AttachmentsComponents from './AttachmentsComponents.vue'
import MessageContentComponent from './MessageContentComponent.vue'
import ReplyForward from './ReplyForwardComponent.vue'

export default {
    components:{ContactName, MessageContentComponent, AttachmentsComponents, ReplyForward},
    name:'NewsfeedComponent',
    props:{
        data:[],
    },

}
</script>

<style lang="scss" scoped>
    .newsfeed{
        /* width: 700px; */
        height: fit-content;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 20px;
        > div{ position: relative;}
        .newsfeed-info{    padding: 20px 0 20px 60px;}
    }
    .news-type-email,.news-type-chat{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        position:absolute;
        margin-top: 25px;
        width: 25px;
        height: auto;
        padding: 10px 6px;
        color: #fff;
    }
    .news-type-email{
        background-color: $red;
    }
    .news-type-chat{
        background-color: $blue;
    }

    /* .hide{
        display: none !important;
    }
    .show{
        display: inline-block !important;
    } */
    .newsfeed-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .date{
            flex-direction: column;
            line-height: 20px;
            font-size: 14px;
            text-align: right;
            .day{
                font-weight: 700;
            }
            .time{ 
                font-weight: 500; 
                color: $gray;}
        }
    }
    .check-btn{
        margin: 10px 20px 0 20px;
        font-size: 20px;
        color: $blue;
    }
</style>
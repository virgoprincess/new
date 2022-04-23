<template>
  <div class="newsfeed">
      <div>
          <b-icon-envelope class="news-type-email" v-if="data.messages.type == 1"></b-icon-envelope>
          <b-icon-chat-dots class="news-type-chat" v-if="data.messages.type == 2"></b-icon-chat-dots>
      </div>
      <div class="newsfeed-info">
         <div class="newsfeed-content">
            <div class="newsfeed-top">
                <contact-name :data="data.messages.profileInfo"/>
                <div class="date">
                    <div class="day">TODAY</div>
                    <div class="time">{{data.messages.time}}</div>
                </div>
            </div>
            <message-content-component :data="data.messages"/>
            <attachments-components :data="data.messages.attachments"/>
         </div>
         <!-- <b-icon-check-circle class="check-btn" @click="$emit('hideFeed')"></b-icon-check-circle> -->
      </div>
      <div :style="displaySnoozeOption ? 'display:flex; justify-content:space-between;':''">
          <div class="clear-snooze d-flex gap-3">
              <b-link class="no-text-decor" @click="$emit('hideFeed')">Clear</b-link>
              <b-link class="no-text-decor" @click="showSnooze = true">Snooze</b-link>
          </div>
          <div class="snooze-options" v-show="showSnooze" @mouseleave="showSnooze = false">
            <b-list-group >
                <span>Snooze</span>
                <b-list-group-item button @click="showSnooze = false">1 hr</b-list-group-item>
                <b-list-group-item button @click="showSnooze = false">1 day</b-list-group-item>
                <b-list-group-item button @click="showSnooze = false">1 week</b-list-group-item>
                <b-list-group-item button @click="showSnooze = false">Custom</b-list-group-item>
                <b-list-group-item button @click="showSnooze = false">Never</b-list-group-item>
            </b-list-group>
          </div>
        <!-- <b-icon-check-circle class="check-btn" @click="$emit('hideFeed')"></b-icon-check-circle> -->
        <reply-forward @compose="show"/>
      </div>
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
    data(){
        return{
            showSnooze:false,
            displaySnoozeOption:true,
        }
    },
    methods:{
        show(visible){
            this.displaySnoozeOption = !visible;
            console.log("isVisible::",visible);
        }
    }
}
</script>

<style lang="scss" scoped>
    .newsfeed::v-deep{
        /* width: 700px; */
        height: fit-content;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 20px;
        > div{ position: relative;}
        .newsfeed-info{    padding: 20px 60px 20px 60px;}
        .clear-snooze{ 
            padding-left: 73px; font-size: 12px;
            & a{
                font-weight: 700;
                font-size: 12px;
                color: $gray;
            }
        }
        .snooze-options{
            position: absolute;
            z-index: 2;
            padding-left: 90px;
            font-size: 12px;
            text-align: center;
            top: -12px;
            & span{ font-weight: 700;}
            .list-group{ 
                background-color: #fff; 
                box-shadow: 2px 2px 8px #00000029;
                border-radius: 10px;
                width: 108px;
                padding: 12px 5px 5px 5px;
                gap: 2px;
            }
            & button{
                color: #9C9C9C;
                border-radius: 5px;
                border: none;
                padding: 5px;
            }
            & button:hover, & button:focus{
                background-color: $blue;
                color: #fff;
            }

        }
    }
    .newsfeed-content{width: 100%;}
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
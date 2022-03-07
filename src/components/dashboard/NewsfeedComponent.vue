<template>
  <div class="newsfeed">
      <div>
          <b-icon-chat-dots class="news-type-email show"></b-icon-chat-dots>
          <b-icon-chat-dots class="news-type-chat hide"></b-icon-chat-dots>
      </div>
      <div class="newsfeed-info">
        <div class="newsfeed-top">
            <contact-name/>
            <div class="date">
                <div class="day">Today</div>
                <div class="time">10:52 AM</div>
            </div>
        </div>
        <message-content-component/>
        <attachments-components/>
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
    name:'NewsfeedComponent'

}
</script>

<style lang="scss" scoped>
    .newsfeed{
        width: 700px;
        height: fit-content;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 20px;

        .newsfeed-info{padding: 20px 60px;}
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

    .hide{
        display: none !important;
    }
    .show{
        display: inline-block !important;
    }
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
</style>
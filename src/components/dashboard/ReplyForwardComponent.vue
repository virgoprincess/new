<template>
  <div class="reply-forward" :class="showCompose">
    <reply-forward-button @compose="isVisible = !isVisible" />
    <div class="message">
      <div class="message-top">
        <div>
            <b-icon-reply-fill></b-icon-reply-fill>
            <p class="email">michaelwilliams@email.com</p>
        </div>
        <b-icon-trash @click="isVisible = !isVisible"></b-icon-trash>
      </div>
      <div class="message-content">
        <b-form-textarea id="textarea"
                         placeholder="Type message ..."
                         rows="3" max-rows="4"> </b-form-textarea>
      </div>
      <div class="send"> 
          <b-icon-paperclip></b-icon-paperclip>
          <b-button-group @click="isVisible = !isVisible">
              <b-icon-cursor-fill></b-icon-cursor-fill>
              Send
          </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import ReplyForwardButton from '../commons/ReplyForwardButton.vue';
export default {
  name:'ReplyForwardComponent',
  components:{
    ReplyForwardButton,
  },
  data(){
    return{
      isVisible: false,
      showCompose:'hide-compose',
    }
  },
  watch:{
    isVisible:function(){
      this.isVisible ? this.showCompose = 'show-compose' : this.showCompose = 'hide-compose';
    }
  },
};
</script>

<style lang="scss" scoped>
.reply-forward{
    .message{
        padding: 20px 60px;
    }
    .options{
         padding: 0 60px 20px 60px;
    }
}
p{
    margin: 0;
}
.bi-reply-fill,
.bi-forward-fill,.bi-trash {
  color: $gray;
  width: 18px;
  height: auto;
}
.bi-reply-fill {
  transform: rotateY(180deg);
}
.bi-paperclip{
    transform: rotate(38deg);
}
.bi-trash,.bi-paperclip{
  color: $dark-gray;
  width: 18px;
  height: auto;
}
/* .options{
    justify-content: end;
    font-size: 0.8rem;
    font-weight: 600;
    color: $gray;
    display: flex;
    flex-direction: row;
    gap: 20px;
    .btn-group{ gap: 10px; }
} */
.message{
    border-top: 1px solid $light-gray;
    .message-top{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        :first-child{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }
    }
    .email{ font-size: 12px; color: $gray; font-weight: 500;}
    .message-content {
      textarea{
        margin-top: 10px;
        font-size: 13px; border: none; overflow-y: hidden !important;
        box-shadow: none;
        ::placeholder{
          font-size: 13px; color: $gray !important;
        }
      }
      textarea:focus{
        border: 1px solid $gray;
      }
    }
}
.send{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 10px;
    .btn-group{
        align-items: center;
        color: #fff;
        /* background: rgb(21,163,222); */
        background: linear-gradient(274deg, rgba(21,163,222,1) 38%, rgba(61,186,213,1) 100%);
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 0.8rem;
        gap: 5px;
    }
}

.hide-compose{
  .message{display: none;}
  .options{ display: flex; }
}
.show-compose{
  .message{ display: block; }
  .options{ display: none; }
}
</style>
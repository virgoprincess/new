<template>
  <div class="message-thread d-flex gap-2 message-other" :class="userSID == data.account_sid ? 'message-you' : 'message-other'">
    <b-img class="profile" rounded="circle" :src="data.photoUrl ? data.photoUrl : require('@/assets/icons/man.jpg')" alt="" /> 
    <div class="message-content">
      <div class="name d-flex gap-2 mb-4">
        <p class="fs-14 fw-800">{{ userSID == data.account_sid ? 'You' : data.author }}</p>
        <span class="fs-11 fw-600 gray-small-text">11:32 pm</span>
      </div>
      <div class="text-message ">
        <p class="fs-13 fw-400">
          {{ data.body }}
        </p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:'MessageThread',
  data(){
    return{      
      userSID:"AC123",
    }
  },
  props:{
    data:[],
  }
}
</script>
<style lang="scss" scoped>
.message-thread{
  padding-top: 20px;
  p{margin:0}
  .profile{width: 37px; height: 37px; }
  .name{line-height: 12px;margin-top: 5px;}
  .text-message{
  /*   margin: 10px 0;
    padding: 5px; */
    max-width: 350px;
    position: relative;
    width: fit-content;
    p{ padding: 10px 10px; width: fit-content; width: 100%;}
  }
  .media-message{
    img{
    border-radius: 15px;
    max-width: 196px;
    height: auto;
    padding: 5px;
    }
  }
}
.message-other{
  .text-message{
    @extend .left-border-radius;
    @extend .white-bg;
  }
}
.message-you{
  flex-direction:row-reverse;
  .message-content{
    display: flex;
    flex-direction: column;
    align-items: end;

    .text-message{
      @extend .right-border-radius;
      @extend .blue-bg;
    }
  }
}

</style>
<template>
  <div class="message-content">
      <div class="subject">{{ data.messageContent.subject }}</div>
      <div :style="data.messageContent.message.length > 92 ? 'display:block':'display:none'" class="message" :class="data.id+'-hide'">{{ data.messageContent.message.slice(0,80) + '...' }} <b-link @click="showReadMore(data.id)">Read more</b-link> </div>
      <div :style="data.messageContent.message.length <= 92 ? 'display:block': 'display:none'" class="message" :class="data.id+'-show'">{{ data.messageContent.message}}</div>
  </div>
</template>

<script>
export default {
    name:'MessageContentComponent',
    props:{
        data:[],
    },
    methods:{
        showReadMore(uid){
            document.getElementsByClassName(uid+'-hide')[0].style.display = 'none';
            document.getElementsByClassName(uid+'-show')[0].style.display = 'block';
        }
    }
}
</script>

<style lang="scss" scoped>
.message-content{
    padding: 20px 0 10px 0;
    .subject{
        font-size: 18px;
        font-weight: 600;
    }
    .message{
        font-size: 13px;
        font-weight: 500;
        color: $gray;

    }
}
</style>
<template>
  <div class="message-content">
      <div class="subject">{{ data.subject }}</div>
      <div class="message">{{ data.message }}</div>
  </div>
</template>

<script>
export default {
    name:'MessageContentComponent',
    props:{
        data:[],
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
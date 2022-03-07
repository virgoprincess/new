<template>
  <div class="message-content">
      <div class="subject">Subject Line</div>
      <div class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  </div>
</template>

<script>
export default {
    name:'MessageContentComponent'
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
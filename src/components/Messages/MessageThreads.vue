<template>
  <div class="message-threads scrollable">
    <message-thread v-for="(thread,i) in data" :key="i" :data="thread"/>
  </div>
</template>

<script>
import MessageThread from './MessageThread.vue'
export default {
  components: { MessageThread },
  name:'MessageThreads',
  props:{
    data:[],
  }
}
</script>

<style lang="scss" scoped>
.message-threads{
  padding: 0 7%;
  height: 80%;
}
</style>
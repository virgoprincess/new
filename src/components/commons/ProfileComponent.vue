<template>
  <div class="profile-component d-flex flex-column align-items-center">
      <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
        <p class="fs-15">Bruce Scott</p>
        <div class="d-flex profile-buttons">
          <b-icon-telephone-fill></b-icon-telephone-fill>
          <b-icon-envelope-fill></b-icon-envelope-fill>
          <b-icon-chat-dots-fill></b-icon-chat-dots-fill>
          <b-icon-calendar-event-fill></b-icon-calendar-event-fill>
        </div>
  </div>
</template>

<script>
export default {
    name:'ProfileComponent'
}
</script>

<style lang="scss" scoped>
.profile-component{
  img{
    width: 64px;
    height: 64px;
  }
  .profile-buttons{
    gap: 10px;
    color: $dark-gray;
  }
}
</style>
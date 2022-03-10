<template>
  <div class="options">
      <b-button-group @click="$emit('compose')">
          <b-icon-reply-fill></b-icon-reply-fill> Reply
      </b-button-group>
      <b-button-group @click="$emit('compose')">
          <b-icon-forward-fill></b-icon-forward-fill>Forward
      </b-button-group>
    </div>
</template>

<script>
export default {
    name:'ReplayForwardButton'
}
</script>

<style lang="scss" scoped>
.options{
    justify-content: flex-end;
    font-size: 12px;
    font-weight: 700;
    color: $gray;
    display: flex;
    flex-direction: row;
    gap: 20px;
    .btn-group{ gap: 10px; }
}
</style>
<template>
  <div class="file-type">
      <p class="file-name">Designs.pdf</p>
      <p class="file-size">12 MB</p>
  </div>
</template>

<script>
export default {
    name:'FileComponent'
}
</script>

<style lang="scss" scoped>
.file-type{
    border-radius: 5px;
    line-height: 4px;
    padding: 20px;
    align-items: center;
    width: fit-content;
    height: 61px;
    display: flex;
    flex-direction: column;
    background-color: $background-color;

    .file-name{
        font-size: 0.9rem;
        font-weight: 800;
    }
    .file-size{ font-size: 0.8rem; color: $gray; align-self: normal; }
    }
</style>
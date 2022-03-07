<template>
  <div class="file d-flex gap-3">
      <div><b-icon-calendar></b-icon-calendar></div>
      <div>
        <p class="file-name">Designs.pdf</p>
      <p class="file-size">12 MB</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'FileIconComponent'
}
</script>

<style lang="scss" scoped>
.file{
  > div:first-child{
    width: 37px;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 5px;
  }
  p{
    margin: 0;
  }
  /* line-height: 17px; */
  align-items: center;
  svg{
    color: $dark-gray;
  }
}
</style>
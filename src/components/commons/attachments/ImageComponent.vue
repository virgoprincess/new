<template>
  <div class="image-type">
    <b-img rounded :src="require('@/assets/images/image-file.jpg')" alt="" />
  </div>
</template>

<script>
export default {
    name:'ImageComponent'
}
</script>

<style lang="scss" scoped>

img{
  width: 76px;
  height: 53px;
}
</style>
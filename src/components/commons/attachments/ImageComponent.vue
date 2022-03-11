<template>
  <div class="image-type">
    <b-img rounded :src="data.fileUrl" :alt="data.fileName" />
  </div>
</template>

<script>
export default {
    name:'ImageComponent',
    props:{
      data:[]
    },
}
</script>

<style lang="scss" scoped>

img{
  width: 76px;
  height: 53px;
}
</style>
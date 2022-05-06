<template>
  <div class="image-type">
    <a :href="data.fileUrl" :download="data.fileName">
      <b-img rounded :src="data.fileUrl" :alt="data.fileName"/>
    </a>
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
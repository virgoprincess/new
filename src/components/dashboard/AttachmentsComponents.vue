<template>
  <div class="attachments">
    <div class="d-flex gap-2" v-for="(result,i) in data" :key="i">
      <image-component :data="result" v-if="result.fileType == 'image'"/>
      <file-component :data="result" v-if="result.fileType != 'image'"/>
    </div>
    </div>
</template>

<script>
import FileComponent from '../commons/attachments/FileComponent.vue'
import ImageComponent from '../commons/attachments/ImageComponent.vue'
export default {
  components: { ImageComponent, FileComponent },
    name:'AttachmentsComponents',
    props:{
      data:[],
    }
}
</script>

<style lang="scss" scoped>
    .attachments{
      padding-left: 15px;
      display: flex;
      gap: 10px;
  }
    /* img{
        width: 76px;
        height: 53px;
    } */
</style>
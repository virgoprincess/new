<template>
  <div class="attachments">
    <image-component/>
    <image-component/>
    <image-component/>
    <file-component/>
    </div>
</template>

<script>
import FileComponent from '../commons/attachments/FileComponent.vue'
import ImageComponent from '../commons/attachments/ImageComponent.vue'
export default {
  components: { ImageComponent, FileComponent },
    name:'AttachmentsComponents'
}
</script>

<style lang="scss" scoped>
    .attachments{
        display: flex;
        gap: 10px;
    }
    /* img{
        width: 76px;
        height: 53px;
    } */
</style>
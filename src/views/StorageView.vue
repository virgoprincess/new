<template>
  <div class="storage-component">
      Storage Section
  </div>
</template>

<script>
export default {
    name:'StorageComponent',
    data(){
      return{
        menu:'storage'
      }
    },
    mounted(){
      this.$store.dispatch("setCurrentMenu",this.menu)
    }
}
</script>

<style lang="scss" scoped>

</style>
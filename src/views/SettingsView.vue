<template>
  <div class="settings-component">
      Settings Section
  </div>
</template>

<script>
export default {
    name:'SetttingsComponent',
    data(){
      return{
        menu:'settings'
      }
    },
    mounted(){
      this.$store.dispatch("setCurrentMenu",this.menu)
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="calendar-component">
    Calendar Section
  </div>
</template>

<script>
export default {
    name:'CalendarComponent',
    data(){
      return{
        menu:'calendar'
      }
    },
    mounted(){
      this.$store.dispatch("setCurrentMenu",this.menu)
    }
}
</script>

<style lang="scss" scoped>

</style>
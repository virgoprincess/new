<template>
  <div class="contact-name">
     <div> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </div>
     <div>
         <div class="name"> Michael Williams </div>
     <div class="job">Job Title</div>
     </div>
  </div>
</template>

<script>
export default {
    name:'ContactNameComponent',
}
</script>

<style lang="scss" scoped>
    .contact-name{
        display: flex;
        gap: 20px;
        align-items: center;
        :not(first-child){ line-height: 20px;}
        img{ width: 44px; height: 44px;}
        .name{ color: $black; font-weight: 700;
        font-size: 16px; }
        .job{ color: $gray;font-weight: 500;
        font-size: 14px; }
    }
</style>
<template>
  <div class="contact-name">
     <div> <b-img rounded="circle" :src="data.profileImage" alt="" /> </div>
     <div>
         <div class="name"> {{ data.firstName }} {{  data.lastName }} </div>
     <div class="job">{{ data.jobTitle }}</div>
     </div>
  </div>
</template>

<script>
export default {
    name:'ContactNameComponent',
    props:{
        data:[],
    }
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
<template>
  <b-list-group-item class="preview-list ">
      <div class="d-flex gap-3">
        <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> 
        <div class="d-flex flex-column">
        <div class="d-flex justify-content-between">
            <p class="name">Bruce Scott</p>
            <p class="date">12:25pm</p>
        </div>
        <!-- <p class="email-subj">Email Subj</p>  --> <!-- this is for email -->
        <p class="msg">Sed ut perspiciatis unde omnis iste natus error sit ab illo beatae vitae …</p>
        </div>
      </div>
  </b-list-group-item>
</template>

<script>
export default {
    name:'PreviewComponent',
}
</script>

<style lang="scss" scoped>
p{ margin-bottom: 0;}
img{
    width: 40px;
    height: 40px;
}
.preview-list{ 
    border-radius: 0 !important; border: none;
        padding-bottom: 0;
    > div{
        padding: 15px 0;
        border-bottom: 1px solid $light-gray;
    }
}
.name,.email-subj{ font-size: 15px; font-weight: 700;}
.date{font-size: 12px; color: $gray; font-weight: 500;}
.msg{font-size: 13px; color: $gray; font-weight: 500;}
</style>
<template>
  <b-list-group-item class="preview-list" @click="$emit('click-mail')" v-if="data.length > 0">
      <div class="d-flex gap-3">
        <b-img rounded="circle" src='https://gravatar.com/avatar/f21ce49c84cbcc1afa4c408d997c1949?s=400&d=robohash&r=x' alt="" v-if="data[1] == 'email'" /> 
        <b-img rounded="circle" :src="data[0].profileImage" alt="" v-else /> 
        <div class="d-flex flex-column w-100" v-if="data[1] == 'email'">
            <div class="d-flex justify-content-between">
                <p class="name fs-12">{{data[0].from}}</p>
                <p class="date">{{data[0].date}}</p>
            </div>
            <p class="email-subj">{{ data[0].subject }}</p>  <!-- this is for email -->
            <p class="msg">{{data[0].snippet}}</p>
        </div>

        <div class="d-flex flex-column w-100" v-else>
            <div class="d-flex justify-content-between">
                <p class="name fs-15">{{data[0].firstName + data[0].lastName}}</p>
                <p class="date">12:52 PM</p>
            </div>
            <p class="msg">{{data[1]}}</p>
        </div>

      </div>
  </b-list-group-item>
</template>

<script>
export default {
    name:'PreviewComponent',
    props:{
        data:[],

    }
}
</script>

<style lang="scss" scoped>
.w-100{  width: 100%;}
p{ margin-bottom: 0 !important;}
img{
    width: 40px;
    height: 40px;
}
.preview-list{ 
    cursor: pointer;
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
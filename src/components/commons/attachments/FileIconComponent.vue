<template>
  <div class="file d-flex gap-3">
      <div><b-icon-calendar></b-icon-calendar></div>
      <div>
        <a :href="data.fileUrl" :download="data.filename">
          <p class="file-name black-small-text">{{data.filename.slice(0,10)+'...' + data.mimeType.split('/')[1]}}</p>
        </a>
      <p class="file-size">{{data.size}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'FileIconComponent',
    props:{
      data:[],
    }
}
</script>

<style lang="scss" scoped>
.file{
  > div:first-child{
    width: 37px;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 5px;
  }
  a{text-decoration: none;}
  p{
    margin: 0;
  }
  /* line-height: 17px; */
  align-items: center;
  svg{
    color: $dark-gray;
  }
}
</style>
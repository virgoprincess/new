<template>
  <b-container fluid class="compose">
    <div class="compose-top">
      <b-row class="align-items-baseline">
        <b-col class="d-flex flex-row align-items-baseline" cols="10">
          <label for="" class="fs-14 fw-700 pr-1">To:</label>
          <b-form-input></b-form-input>
        </b-col>
        <b-col class="gray-small-text">
          <span>Cc </span><span>Bcc</span>
        </b-col>
      </b-row>
      <b-row class="align-items-baseline">
        <b-col class="d-flex flex-row align-items-baseline" cols="10">
          <label for="" class="fs-14 fw-700 pr-1">Subject:</label>
          <b-form-input></b-form-input>
        </b-col>
      </b-row>
    </div>
    <div class="compose-center">
      <b-form-textarea id="textarea"
                         rows="20"> </b-form-textarea>
    </div>
    <div class="compose-send">
      <b-row>
        <b-col class="tools-left" cols="10">
          <b-dropdown right split text="Send">
          <b-dropdown-item>Schedule Send</b-dropdown-item>
          </b-dropdown>
          <span>A</span>
          <b-icon-paperclip/>
          <b-icon-pencil-fill/>
        </b-col>
        <b-col>
          <b-icon-trash></b-icon-trash>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  name:'ComposeComponent'
}
</script>
<style lang="scss" scoped>
.compose::v-deep{
  padding:20px 0 0 0;
  .col,.row{
    padding: 0;
  }
  .row{
    margin:0;
    border-bottom: 1px solid $lighter-gray;
  }
  input{
    border: none;
    background-color: transparent;
  }
  textarea{
    margin-top: 10px;
    font-size: 13px; border: none; overflow-y: hidden !important;
    box-shadow: none;
    background-color: transparent;
    ::placeholder{
      font-size: 13px; color: $gray !important;
    }
  }
  textarea:focus{
    border: none
  }
  .sr-only{ display: none;}
  .compose-send{
    .btn-group{
      border: none;
        .btn{
          border-color: transparent;
          align-items: center;
          color: #fff;
          background:$blue;
          font-size: 0.8rem;
        }
        .dropdown-menu{
          font-size: 0.8rem;
          padding-left: 0;
          min-width: 0;
        }
    }
    .bi-paperclip{
      transform: rotate(38deg);
    }
    span{ text-decoration: underline; }
    .bi-paperclip,.bi-pencil-fill,span,.bi-trash{
      color: $dark-gray;
      width: 15px;
      height: auto;
    }
    .tools-left{
      display: flex;
      gap: 15px;
      align-items: baseline;
    }
    .row{align-items: baseline; border-bottom: none;}
  }
}
</style>
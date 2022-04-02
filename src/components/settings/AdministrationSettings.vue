<template>
  <div class="administration-settings scrollable">
      <b-container fluid class="administration-form" >
        <b-row>
          <b-col cols="3">
            <h5>Settings</h5>
          </b-col>
          <b-col class="align-right">
            <b-btn class="btn-save">Save</b-btn>
          </b-col>
        </b-row>
        <b-row class="justify-content-between align-items-baseline">
          <b-col cols="3">
            <label for="">Joining Sphyr</label>
          </b-col>
          <b-col class="d-flex flex-column">
            <b-form-radio v-model="selected"  name="invitation-radios" value="A" class="pt-4">
                <p>Allow invitations</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="invitation-radios" value="A" class="pt-4">
                <p>Allow invitations adn approve invitations for any email address from the following domains</p>
              </b-form-radio>
            <b-form-input type="text" placeholder="Domain" class="mt-4"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="justify-content-between">
          <b-col cols="3">
            <label for="">Joining Sphyr</label>
          </b-col>
          <b-col class="d-flex flex-column">
            <b-form-radio v-model="selected"  name="invitation-radios" value="A" class="pt-4">
                <p>Allow invitations</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="invitation-radios" value="A" class="pt-4">
                <p>Allow invitations adn approve invitations for any email address from the following domains</p>
              </b-form-radio>
            <div class="d-flex gap-3 pt-4" >
              <b-form-input type="text" placeholder="Start Time"></b-form-input>
              <b-form-input type="text" placeholder="End Time"></b-form-input>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Delete Company Account</label>
            <p class="desc">This will permanently delete the account</p>
          </b-col>
          <b-col class="align-right">
            <b-btn>Delete</b-btn>
          </b-col>
        </b-row>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'AdministrationSettings',
  data(){
    return{
      selected:'',
    }
  }
}
</script>
<style lang="scss" scoped>
.administration-settings::v-deep{
  max-height: 77vh;
  /* padding: 30px 50px; */

  .col-4{
   padding: 0;
 }
 .row{ gap: 110px;}
 .account-input{
   width: 60%;
 }
.list-group{
  > div{background-color: transparent; border: 0;}
  }
}
</style>
<template>
  <div class="profile-settings scrollable">
    <b-container fluid class="profile-form" >
        <b-row>
          <b-col cols="3">
            <h5>Profile</h5>
          </b-col>
        </b-row>
        <b-row class="profile-row">
          <b-col cols="3">
            <b-img
            class="logo"
            rounded="circle"
            :src="require('@/assets/images/image-file-3.jpg')"
            alt="Left image"
          ></b-img>
          </b-col>
          <b-col class="align-right">
            <b-btn class="btn-save">Save</b-btn>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label for="">Username</label>
            <p class="desc">Jackie123</p>
          </b-col>
          <b-col class="d-flex gap-3">
            <b-form-input type="password" placeholder="New Password"></b-form-input>
            <b-form-input type="password" placeholder="Confirm password"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Email</label>
          </b-col>
          <b-col>
            <b-form-input  class="account-input w-100" type="password" placeholder="Email"></b-form-input>
          </b-col>
        </b-row>

        
        <b-row>
          <b-col cols="3">
            <label>Status</label>
            <p class="desc">Other will be able to see your status</p>
          </b-col>

          <b-col class="d-flex justify-content-end">
            <div class="d-flex flex-row gap-3">
              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Available</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Busy</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Away</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Offline</p>
              </b-form-radio>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Preferred communication method</label>
            <p class="desc">Other will be able to see your status</p>
          </b-col>

          <b-col class="d-flex justify-content-end">
            <div class="d-flex flex-row gap-3">
              <b-form-radio v-model="selected"  name="communication-radios" value="A">
                <p>Phone</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="communication-radios" value="A">
                <p>Text</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="communication-radios" value="A">
                <p>Email</p>
              </b-form-radio>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Local Time</label>
            <p class="desc">Other will be able to see your local time</p>
          </b-col>
          <b-col>
            <b-dropdown text="Pacific Standard Time (PST) UTC-08:00" class="w-100">
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard   `Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
          </b-dropdown>
          </b-col>
        </b-row>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'ProfileSettings',
  data(){
    return{
      selected:'',
    }
  }
}
</script>
<style lang="scss" scoped>
.profile-settings::v-deep{
  .row:first-child{
    border-bottom: 0;
    margin-bottom: 0px;
  }
  max-height: 77vh;
  .profile-row{
    display: flex;
    justify-content: end !important;
    align-items: end !important;
  }
}
.logo{ width: 161px; height: 161px; }

</style>
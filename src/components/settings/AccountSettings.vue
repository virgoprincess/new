<template>
  <div class="account-settings scrollable">
    
    <!-- <b-form  class="account-form"> -->
      <b-container fluid class="account-form" >
        <b-row>
          <b-col cols="3">
            <h5>Settings</h5>
          </b-col>
          <b-col class="align-right">
            <b-btn >Save</b-btn>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">
            <label for="">Password</label>
          </b-col>
          <b-col class="d-flex gap-3">
            <b-form-input type="password" placeholder="New Password"></b-form-input>
            <b-form-input type="password" placeholder="Confirm password"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Two Factor Authentication</label>
            <p class="desc">Send verification code to:</p>
          </b-col>
          <b-col>
            <b-form-input  class="account-input w-100" type="password" placeholder="Email"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Update Email</label>
          </b-col>
          <b-col class="d-flex gap-3">
            <b-form-input type="email" placeholder="Current Email"></b-form-input>
            <b-form-input type="email" placeholder="New Email"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Time Zone</label>
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

        <b-row>
          <b-col cols="3">
            <label>Language</label>
          </b-col>
          <b-col>
            <b-dropdown text="English" class="w-100">
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>

        <b-row class="justify-content-between align-items-center">
          <b-col cols="3">
            <label>Sign out of all sessions</label>
            <p class="desc">Log out from all devices in the case of theft, loss, etc.</p>
          </b-col>
          <b-col class="align-right">
            <b-btn>Sign Out</b-btn>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Deactivate Account</label>
          </b-col>
          <b-col class="align-right">
            <b-btn>Deactivate</b-btn>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <h5>Notifications</h5>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            <label>Sign-in Notifications</label>
            <p class="desc">Received automated updates when a new device signs, a new location is used,etc.</p>
          </b-col>

          <b-col class="d-flex justify-content-end">
            <div class="d-flex flex-column gap-3">
              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Secure</p>
                <p class="desc fw-400">Lorem ipsum sed dolr used. Solar sedutpe lorem ipsum.</p>
              </b-form-radio>

              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Standard</p>
                <p class="desc">Lorem ipsum sed dolr used. Solar sedutpe lorem ipsum.</p>
              </b-form-radio>

              <b-form-radio v-model="selected"  name="some-radios" value="A">
                <p>Don't send sign-in notifications</p>
              </b-form-radio>
            </div>
          </b-col>
        </b-row>
      </b-container>
    <!-- </b-form> -->
  </div>
</template>

<script>
export default {
    name:'AccountSettings'
}
</script>

<style lang="scss" scoped>
.account-settings{ 
  max-height: 86vh;
 }
 .account-form::v-deep{
   padding: 30px 50px;
 }
 .col-4{
   padding: 0;
 }
 .account-input{
   width: 60%;
 }
.list-group{
  > div{background-color: transparent; border: 0;}
}

</style>
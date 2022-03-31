<template>
  <div class="account-settings">
    
    <b-form>
      <div class="d-flex justify-content-between">
        <h5>Settings</h5>
        <b-btn variant="primary">Save</b-btn>
      </div>

      <div class="d-flex">
          <b-label>Password</b-label>
          <b-form-input type="password" placeholder="New Password"></b-form-input>
          <b-form-input type="password" placeholder="Confirm password"></b-form-input>
      </div>

      <div class="d-flex">
          <div>
            <b-label>Two Factor Authentication</b-label>
            <p>Send verification code to:</p>
          </div>
          <b-form-input type="password" placeholder="Email"></b-form-input>
      </div>

      <div class="d-flex">
          <b-label>Update Email</b-label>
          <b-form-input type="email" placeholder="Current Email"></b-form-input>
          <b-form-input type="email" placeholder="New Email"></b-form-input>
      </div>

      <div class="d-flex">
          <b-label>Time Zone</b-label>
          <b-dropdown text="Pacific Standard Time (PST) UTC-08:00" variant="primary">
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            <b-dropdown-item>Pacific Standard Time (PST) <span>UTC-08:00</span></b-dropdown-item>
            
          </b-dropdown>
      </div>

      <div class="d-flex">
          <b-label>Time Zone</b-label>
          <b-dropdown text="English" variant="primary">
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>English</b-dropdown-item>
          </b-dropdown>
      </div>

       <div class="d-flex">
          <div>
            <b-label>Sign out of all sessions</b-label>
            <p>Log out from all devices in the case of theft, loss, etc.</p>
          </div>
          <b-btn variant="primary">Sign Out</b-btn>
      </div>
      <div class="d-flex">
          <div>
            <b-label>Deactivate Account</b-label>
          </div>
          <b-btn variant="primary">Deactivate</b-btn>
      </div>

      <h5>Notifications</h5>

      <div class="d-flex">
        <div>
          <b-label>Sign-in Notifications</b-label>
          <p>Received automated updates when a new device signs, a new location is used,etc.</p>
        </div>
        <!-- <b-form-group v-slot="{ ariaDescribedby }"> -->
         <div>
            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A" class="d-flex">
              <p>Secure</p>
              <p>Lorem ipsum sed dolr used. Solar sedutpe lorem ipsum.</p>
            </b-form-radio>

            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A" class="d-flex">
              <p>Standard</p>
              <p>Lorem ipsum sed dolr used. Solar sedutpe lorem ipsum.</p>
            </b-form-radio>

            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A" class="d-flex">
              <p>Don't send sign-in notifications</p>
            </b-form-radio>
         </div>

        <!-- </b-form-group> -->
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
    name:'AccountSettings'
}
</script>

<style lang="scss" scoped>
.list-group{
  > div{background-color: transparent; border: 0;}
}
/* .form-group{
  display: flex;
} */
</style>
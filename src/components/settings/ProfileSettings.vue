<template>
  <div class="profile-settings scrollable">
    <b-container fluid class="profile-form" >
        <b-row class="pa-0">
          <b-col cols="3" class="pa-0">
            <h5>Profile</h5>
          </b-col>
        </b-row>
        <b-row class="profile-row">
          <b-col class="thumbnail" cols="2">
              <div>
                <input type="file" id="file-upload" class="file-upload" multiple accept="image/*">
                  <b-img
                    class="logo"
                    rounded="circle"
                    :src="require('@/assets/images/image-file-3.jpg')"
                    alt="Left image"
                    v-show="false"
                    >
                  </b-img>
                  <div class="empty-thumbnail">
                      <div>
                        <b-img :src="require('@/assets/icons/v1/Sphyr-Icons_image.png')"></b-img>
                        <p class="gray-small-text">Upload Photo</p>
                      </div>
                  </div>

              </div>
          </b-col>
          <b-col class="profiles-container">
            <p class="black-small-text pb-2">Default Profiles</p>
            <div class="d-flex gap-2">
              <div class="default-profile gradient-dark-blue-bg">
                <span>N</span>
              </div>
              <div class="default-profile gradient-orange-bg">
                <span>N</span>
              </div>
              <div class="default-profile gradient-light-green-bg">
                <span>N</span>
              </div>
              <div class="default-profile gradient-purple-bg">
                <span>N</span>
              </div>
              <div class="default-profile gradient-red-bg">
                <span>N</span>
              </div>
            </div>
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

        <b-row class="justify-content-between">
          <b-col cols="3">
            <label for="">Do not Disturb</label>
          </b-col>
          <b-col class="d-flex flex-column">
            <b-form-radio v-model="selected"  name="invitation-radios" value="default" class="pt-4">
                <p>Default</p>
              </b-form-radio>
              <b-form-radio v-model="selected"  name="invitation-radios" value="automatic" class="pt-4">
                <p>Automatically disable notifications from:</p>
              </b-form-radio>
            <div class="d-flex gap-3 pt-4" >
              <b-form-input type="text" placeholder="Start Time"></b-form-input>
              <b-form-input type="text" placeholder="End Time"></b-form-input>
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
    padding-top: 0;
    gap: 35px;

    & .thumbnail{ padding-left: 0;}
    & .empty-thumbnail{
      width: 161px;
      height: 161px;
      border-radius: 50%;
      border: 1px solid $light-gray;
      display: flex;
      justify-content: center;
      align-items: center;
      > div{ text-align: center; }
      img{
        width: 35px;
        height: auto;
        opacity: 0.2;
        margin-bottom: 5px;
      }
    }
  }
  .file-upload{
    opacity: 0;
    height: 161px;
    width: 161px;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
  .profiles-container{
    margin: auto;
    .default-profile{
      cursor: pointer;
      width: 66px;
      height: 66px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      > span{ font-size: 26px; color: #ffffff80;}
    }
    .default-profile:first-child{
      box-shadow: inset 0px 2px 5px #00000080,1px 1px 4px #00000059;
      border: 1px solid #ffffff;
    }
  }
}
.logo{ width: 161px; height: 161px; }

</style>
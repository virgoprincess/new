<template>
  <div class="permissions-settings scrollable">
    <b-container>
      <b-row>
        <b-col cols=3>
          <h5>Permissions</h5>
        </b-col>
        <b-col class="align-right">
          <b-btn class="btn-save">Save</b-btn>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <label>Invitations</label>
          <p class="desc">Who can invite others</p>
        </b-col>
        <b-col>
          <b-dropdown text="Select Role" class="w-100">
          <b-dropdown-item>Admin</b-dropdown-item>
          <b-dropdown-item>Owner</b-dropdown-item>
          <b-dropdown-item>User</b-dropdown-item>
          <b-dropdown-item>Guest</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>

    <b-row>
      <b-col cols="3">
        <label for="">Required Admin Approval</label>
      </b-col>
      <b-col class="d-flex justify-content-end gap-4">
        <b-form-radio v-model="selected"  name="approval-radios" value="Yes">
            <label for="">Yes</label>
        </b-form-radio>
        <b-form-radio v-model="selected"  name="approval-radios" value="No">
            <label for="">No</label>
        </b-form-radio>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label>File Storage</label>
        <p class="desc">Who can upload files to storage</p>
      </b-col>
      <b-col>
        <b-dropdown text="Select Role" class="w-100">
        <b-dropdown-item>Admin</b-dropdown-item>
        <b-dropdown-item>Owner</b-dropdown-item>
        <b-dropdown-item>User</b-dropdown-item>
        <b-dropdown-item>Guest</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label for="">Uploading and sharing files in conversations with people from other companies</label>
      </b-col>
      <b-col class="d-flex justify-content-end gap-4">
        <b-form-radio v-model="selected"  name="storage-radios" value="enable">
            <label for="">Enable</label>
        </b-form-radio>
        <b-form-radio v-model="selected"  name="storage-radios" value="disable">
            <label for="">Disable</label>
        </b-form-radio>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <label>Analytics</label>
        <p class="desc">Who can view the analytics page</p>
      </b-col>
      <b-col>
        <b-dropdown text="Select Role" class="w-100">
        <b-dropdown-item>Admin</b-dropdown-item>
        <b-dropdown-item>Owner</b-dropdown-item>
        <b-dropdown-item>User</b-dropdown-item>
        <b-dropdown-item>Guest</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label for="">Member Analytics</label>
      </b-col>
      <b-col class="d-flex justify-content-end gap-4">
        <b-form-radio v-model="selected"  name="analytics-radios" value="enable">
            <label for="">Enable</label>
        </b-form-radio>
        <b-form-radio v-model="selected"  name="analytics-radios" value="disable">
            <label for="">Disable</label>
        </b-form-radio>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label>Authentication</label>
        <p class="desc">Automated Password Reset scheduler</p>
      </b-col>
      <b-col>
        <b-dropdown text="Select" class="w-100">
      </b-dropdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label>Authentication</label>
        <p class="desc">Forced password reset for all users</p>
      </b-col>
      <b-col>
        <b-dropdown text="Select" class="w-100">
      </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
    
  </div>
</template>
<script>
export default {
  name:'PermissionsSettings',
  data(){
    return{
      selected:'',
    }
  }
}
</script>
<style lang="scss" scoped>
  .permissions-settings{
    max-height: 77vh;
  }
</style>
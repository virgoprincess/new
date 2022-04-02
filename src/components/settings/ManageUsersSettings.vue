<template>
  <div class="manage-users-settings">
    <b-container fluid class="manage-users-form" >
        <b-row>
          <b-col cols="3">
            <h5>Users</h5>
          </b-col>
          <b-col class="align-right">
            <b-btn class="btn-fit">Send Invite</b-btn>
          </b-col>
        </b-row>
        
      <div class="members-list scrollable">
        <table class="tabletable-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>User Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, i) in members" :key="i">
              <td>
                <b-img
                  class="logo mr-3"
                  rounded="circle"
                  :src="require('@/assets/images/image-file-3.jpg')"
                  alt="Left image"
                ></b-img>
                {{member.name}} 
              </td>
              <td>{{ member.username }}</td>
              <td class="fw-700">{{ member.email}}</td>
              <td> {{member.role}} </td>
            </tr>
          </tbody>
        </table>
      </div>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'ManageUsersSettings',
  data(){
    return{
      members:[
        { name:'James Stewart', email:'email@gmail.com', role:'Admin',username:'James123'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner',username:'Rachel1121'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User',username:'tonyrob332'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User',username:'josephadeam'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest',username:'454dRay'},
        { name:'James Stewart', email:'email@gmail.com', role:'Admin',username:'James123'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner',username:'James123'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User',username:'James123'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User',username:'James123'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest',username:'James123'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.manage-users-settings{
  /* padding: 30px 50px; */
  max-height: 77vh;
  /* .search-member{
    border: 1px solid $light-gray;
    padding-left: 5px;
    background-color: white;
    align-items: center;
    border-radius: 0.25rem;
    width: 350px;
    svg{ color: $light-gray; }
    input{
      color: $light-gray;
      background-color: transparent;
      padding: 0 0 0 5px;
      border: 0;
    }
    input::placeholder{
      font-style: normal;
    }
  } */
  .btn-add{ width: 50px;background-color: #fff; border-color:$light-gray; height:45px;}
  .members-list{ max-height: 70vh;}
/*   .tabletable-bordered{ width: 100%; }
  
  table {
  border-collapse: separate;
  border-spacing: 0 15px;
  }
  th,
  td {
    text-align: left;
    border-bottom: 1px solid $light-gray;
    padding: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  th {
    position: sticky;
    position: -webkit-sticky;
    background-color: $background-color;
    top: 0;
  } */
}
</style>
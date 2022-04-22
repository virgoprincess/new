<template>
  <div class="manage-users-settings">
    <b-container fluid class="manage-users-form" >
        <b-row>
          <b-col cols="3">
            <h5>Users</h5>
          </b-col>
          <b-col class="align-right">
            <b-btn class="btn-fit btn-outline">Send Invite</b-btn>
          </b-col>
        </b-row>
        
      <div class="members-list scrollable">
        <b-table small :fields="fields" :items="members" responsive="sm">
          <template #cell(status)='data'>
            <div class="billing-status" :class="data.item.status.toLowerCase() === 'active' ? 'green-highlight' :'red-highlight'">
              <b-icon-check2 v-show="data.item.status.toLowerCase() === 'active'"/> {{data.item.status}}
            </div> 
          </template>
        </b-table>
        <!-- <table class="tabletable-bordered">
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
              <td>{{ member.status }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'ManageUsersSettings',
  data(){
    return{
      fields:[
        {
          key:'name',
          sortable:true,
        },
        {
          key:'username',
          sortable:true,
        },
        {
          key:'email',
          label:'Email Address',
          sortable:true,
        },
        {
          key:'role',
          label:'User Type',
          sortable:true,
        },
        {
          key:'status',
          sortable:true,
        }
      ],
      members:[
        { name:'James Stewart', email:'email@gmail.com', role:'Admin',username:'James123', status:'Inactive'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner',username:'Rachel1121', status:'Active'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User',username:'tonyrob332', status:'Active'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User',username:'josephadeam', status:'Active'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest',username:'454dRay', status:'Active'},
        { name:'James Stewart', email:'email@gmail.com', role:'Admin',username:'James123', status:'Active'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner',username:'James123', status:'Active'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User',username:'James123', status:'Active'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User',username:'James123', status:'Active'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest',username:'James123', status:'Active'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.manage-users-settings::v-deep{
  .row:first-child{
    border-bottom: 0;
    margin-bottom: 0px;
  }
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
   th{
    background-image: none !important;
    width: 20%;
  }
  img {
      width: 50px;
      height: 50px;
    }
  .sr-only{
    display: none;
  }
}
</style>
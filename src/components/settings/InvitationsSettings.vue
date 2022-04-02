<template>
  <div class="invitations-settings">
    <b-container fluid class="invitation-form" >
        <b-row>
          <b-col cols="3">
            <h5>Invitations</h5>
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
              <th>Email Address</th>
              <th>Invited By</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, i) in members" :key="i">
              <td> {{member.name}} </td>
              <td>{{ member.email }}</td>
              <td>{{ member.invitedBy}}</td>
              <td>{{member.date}} </td>
              <td> 
                <div class="member-status" :class="member.status === 'accepted' ? 'accepted' :'pending'">
                  <b-icon-check2/> {{member.status}}
                </div> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'InvitationsSettings',
  data(){
    return{
      members:[
        { name:'James Stewart', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Rachel Williams', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'pending'},
        { name:'Tony Roberts', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Joseph Adams', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Ray Smith', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'pending'},
        { name:'James Stewart', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Rachel Williams', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Tony Roberts', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Joseph Adams', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
        { name:'Ray Smith', email:'email@gmail.com', invitedBy:'Jessica Shaw', date:'Dec. 1, 2022', status:'accepted'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.invitations-settings{
  max-height: 77vh;
}
/* .tabletable-bordered{ width: 100%; }
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
  }
  .pending{
    color: $brown;
    background-color:$light-brown;
  }
  .accepted{ 
    color: $medium-green;
    background-color:$light-green;
   }
  .member-status{
    font-weight: 600;
    width: fit-content;
    text-align: center;
    padding: 5px 10px;
    border-radius: 90px;
  } */
  .members-list{
    max-height: 77vh;
  }
</style>
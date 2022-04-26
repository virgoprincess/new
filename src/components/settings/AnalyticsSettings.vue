<template>
  <div class="analytics-settings scrollable">
    <b-container fluid class="analytics-form" >
        <b-row>
          <b-col cols=3>
            <h5>Analytics</h5>
          </b-col>
        </b-row>
        <b-row class="align-items-baseline">
          <b-col cols=6>
            <div>
              <p>Number of Users</p>
              <div class="d-flex">
                <users-chart class="chart"/>
                <active-users-chart class="chart"/>
              </div>
              <div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div>
              <p>When messages are sent</p>
              <messages-sent-chart/>
            </div>
          </b-col>
        </b-row>
        <b-row class="align-items-baseline">
          <b-col cols=6>
            <div>
              <p>When messages are read</p>
              <messages-read-chart/>
            </div>
          </b-col>
          <b-col>
            <div class="settings-file-storage">
              <p>File Storage</p>
              <file-storage-chart class="chart"/>
            </div>
          </b-col>
        </b-row>

        <div class="d-flex justify-content-between">
        <h5>Members</h5>
        <div class="d-flex align-items-center gap-2">
          <b-input-group class="search-member">
            <b-icon-search />
            <b-form-input  v-model="search"  placeholder="Search" autocomplete="off" ></b-form-input>
          </b-input-group>
          <b-button class="btn-add">
              <b-icon-plus />
          </b-button>
        </div>
      </div>

      <div class="members-list scrollable">
        <b-table small :items="filteredData" :fields="fields" responsive="sm">
          <template #cell(user)="data">
             <b-img
                  class="logo"
                  rounded="circle"
                  :src="require('@/assets/images/image-file-3.jpg')"
                  alt="Left image"
                ></b-img> {{ data.item.user }}
          </template>
        </b-table>
        <!-- <table class="tabletable-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, i) in members" :key="i">
              <td>
                <b-img
                  class="logo"
                  rounded="circle"
                  :src="require('@/assets/images/image-file-3.jpg')"
                  alt="Left image"
                ></b-img>
                {{member.name}} 
              </td>
              <td class="fw-700">{{ member.email }}</td>
              <td> {{member.role}} </td>
            </tr>
          </tbody>
        </table> -->
      </div>

      </b-container>
  </div>
</template>
<script>
import ActiveUsersChart from '../charts/ActiveUsersChart.vue';
import FileStorageChart from '../charts/fileStorageChart.vue';
import MessagesReadChart from '../charts/MessagesReadChart.vue';
import MessagesSentChart from '../charts/MessagesSentChart.vue';
import UsersChart from '../charts/UsersChart.vue';
export default {
  components: { ActiveUsersChart, UsersChart, FileStorageChart, MessagesSentChart, MessagesReadChart },
  name:'AnalyticsSettings',
  mounted(){
    this.setupTable();
  },
  methods:{
    setupTable(){
      this.filteredData = this.members;
    }
  },
  data(){
    return{
      fields:[
        {
          key:'user',
          sortable:true,
        },
        {
          key:'userType',
          sortable:true,
        },
        {
          key:'dateCreated',
          label:'Account Creation',
          sortable:true,
        },
        {
          key:'daysActive',
          sortable:true,
        },
        {
          key:'totalMessages',
          sortable:true,
        },
      ],
      filteredData:[],
      members:[
        {user:'James Stewart',userType:'Admin',dateCreated:'Dec. 12, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Justin James',userType:'Owner',dateCreated:'Jan. 01, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Bond Justin',userType:'Owner',dateCreated:'Feb. 24, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Leslie Craig',userType:'Owner',dateCreated:'Mar. 09, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Mark Bond',userType:'Owner',dateCreated:'Apr. 07, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Joseph Lee',userType:'Owner',dateCreated:'May. 15, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'John Cruz',userType:'Admin',dateCreated:'June. 17, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Marie Luis',userType:'Owner',dateCreated:'July. 23, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Copper Luke',userType:'Owner',dateCreated:'Aug. 29, 2022', daysActive:'91',totalMessages:'1,938'},
        {user:'Sherly Bert',userType:'Admin',dateCreated:'Sept. 08, 2022', daysActive:'91',totalMessages:'1,938'},
      ],
      search:''
    }
  },
  watch:{
    search(){
      this.filteredData = this.members.filter(member => {
        return member.user.toLowerCase().match(this.search.toString().toLowerCase()) || member.userType.toLowerCase().match(this.search.toString().toLowerCase());
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.analytics-settings::v-deep{
  /* padding: 30px 50px; */
  max-height: 77vh;
  .row{
    border-bottom: 0;
    margin-bottom: 0px;
  }
  .row:not(:first-child){
        padding-bottom: 100px;
        margin: 0;
  }
  .search-member{
    border: 1px solid $light-gray;
    padding-left: 5px;
    background-color: white;
    align-items: center;
    border-radius: 0.25rem;
    width: 350px;
    svg{ color: $light-gray; }
    input{
      color: $black;
      background-color: transparent;
      padding: 0 0 0 5px;
      border: 0;
    }
    input::placeholder{
      font-style: normal;
    }
  }
  .btn-add,.btn-add:focus,.btn-add:hover{ width: 50px;background-color: #fff; border-color:$light-gray; height:45px;color: $black;}
  .members-list{ max-height: 55vh;}
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
  } */
  th{
    background-image: none !important;
    width: 20%;
  }
  td{vertical-align: middle;}
  th:first-child
  img {
      width: 50px;
      height: 50px;
    }
  .sr-only{
    display: none;
  }

  .chart{
    width:210px !important;
    height: 210px !important;
  }
  .settings-file-storage .chart{ margin: auto; }
  p{padding-bottom: 10px;}
}
</style>
<template>
  <div class="analytics-settings">
    <b-container fluid class="analytics-form" >
        <b-row>
          <b-col cols=3>
            <h5>Analytics</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div>
              <p>Number of Users</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <p>When messages are sent</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div>
              <p>When messages are read</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <p>File Storage</p>
            </div>
          </b-col>
        </b-row>

        <div class="d-flex justify-content-between">
        <h5>Members</h5>
        <div class="d-flex align-items-center gap-2">
          <b-input-group class="search-member">
            <b-icon-search />
            <b-form-input  v-model="searchedText"  placeholder="Search" autocomplete="off" ></b-form-input>
          </b-input-group>
          <b-button class="btn-add">
              <b-icon-plus />
          </b-button>
        </div>
      </div>

      <div class="members-list scrollable">
        <table class="tabletable-bordered">
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
        </table>
      </div>

      </b-container>
  </div>
</template>
<script>
export default {
  name:'AnalyticsSettings',
  data(){
    return{
      members:[
        { name:'James Stewart', email:'email@gmail.com', role:'Admin'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest'},
        { name:'James Stewart', email:'email@gmail.com', role:'Admin'},
        { name:'Rachel Williams', email:'email@gmail.com', role:'Owner'},
        { name:'Tony Roberts', email:'email@gmail.com', role:'User'},
        { name:'Joseph Adams', email:'email@gmail.com', role:'User'},
        { name:'Ray Smith', email:'email@gmail.com', role:'Guest'},
      ],
      searchedText:''
    }
  }
}
</script>
<style lang="scss" scoped>
.analytics-settings{
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
      color: $light-gray;
      background-color: transparent;
      padding: 0 0 0 5px;
      border: 0;
    }
    input::placeholder{
      font-style: normal;
    }
  }
  .btn-add{ width: 50px;background-color: #fff; border-color:$light-gray; height:45px;}
  .members-list{ max-height: 55vh;}
 /*  .tabletable-bordered{ width: 100%; }
  
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
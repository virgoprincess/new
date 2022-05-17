<template>
  <b-container fluid class="compose">
    <div class="compose-top">
      <b-row class="align-items-baseline">
        <b-col class="compose-to">
          <label for="" class="label-to ">To:</label>
          

          <div id="email-search-container" class="email-search-container" v-show="filteredData.length > 0">

            <b-input-group >
              <div class="d-flex justify-content-center align-items-center">
                 <label for="" class="fs-14 fw-700 pr-1">To:</label>
              <b-form-input id="email-list-input"  v-model="emailText"  placeholder="Search" autocomplete="off" ></b-form-input>
              </div>
              <b-icon-x @click="emailText=''"/>
            </b-input-group>

            <b-list-group id="email-lists" class="email-lists scrollable">
              <b-list-group-item button v-for="(email,i) in filteredData" :key="i" @click="addEmail(email)">
                <b-img :src="email.photoUrl" alt=" " rounded="circle"/>
                <div>
                  <span class="fw-700">{{ email.name }}</span><br/>
                  <span>{{ email.email }}</span>
                </div>
              </b-list-group-item>
            </b-list-group>

          </div>
          <!-- End of DIV search container -->
          
        </b-col>
        <b-col class="email-send" cols="10">

          <div class="email-ad" v-for="(email,i) in emailInfo.to" :key="i">
            <b-img :src="email.photoUrl" class="rounded-circle"/>
              <span v-if="email.name != ''">{{ email.name }}</span>
              <span v-else>{{ email.email }}</span>
              <b-icon-x class="fw-700" @click="deleteEmailList(email)"/>
          </div>     
                    
          <b-form-input id="email-input" v-model="emailText" placeholder="Search" class="fs-12"></b-form-input>
        </b-col>
        
        <b-col class="gray-small-text" cols="">
          <span>Cc </span><span>Bcc</span>
        </b-col>
      </b-row>
      <b-row class="align-items-baseline">
        <b-col class="d-flex flex-row align-items-baseline" cols="10">
          <label for="" class="fs-14 fw-700 pr-1">Subject:</label>
          <b-form-input v-model="emailInfo.subject"></b-form-input>
        </b-col>
      </b-row>
    </div>
    <div class="compose-center">
      <b-form-textarea id="textarea"
                         rows="20" v-model="emailInfo.text" value="test"> </b-form-textarea>
    </div>
    <div class="compose-send">
      <b-row>
        <b-col class="tools-left" cols="10">
          <b-dropdown right split text="Send">
          <b-dropdown-item>Schedule Send</b-dropdown-item>
          </b-dropdown>
          <span>A</span>
          <b-icon-paperclip/>
          <b-icon-pencil-fill/>
        </b-col>
        <b-col>
          <b-icon-trash @click="deleteEmail"></b-icon-trash>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name:'ComposeComponent',
  data(){
    return{
      emailText:'',
      emailInfo:{
        to:[],
        cc:[],
        bcc:[],
        subject:'',
        text:''
      },
      filteredData:[],
    }
  },
  methods:{
    deleteEmail(){
      this.$store.state.composedInfo = null;
      this.$store.state.isAddNew = false;
    },
    addEmail(email){
      this.emailInfo.to.push(email);
      this.emailText = '';
    },
    deleteEmailList(email){
      this.emailInfo.to = this.emailInfo.to.filter( item => item != email );
    }
  },
  watch:{
    emailText(){
     if(this.emailText.toString() != ''){
       document.getElementById('email-list-input').focus();
       document.getElementById('email-list-input').addEventListener('focus',()=> {
         document.getElementById('email-input').focus();
       })
       this.filteredData = this.contacts.external.filter(emailInfo =>{
        return  emailInfo.name.toLowerCase().match(this.emailText.toString().toLowerCase()) || emailInfo.email.toLowerCase().match( this.emailText.toString().toLowerCase());
      })
     }else{
       this.filteredData = [];
       document.getElementById('email-input').focus();
     }
    },
    
    'emailInfo.subject'(){
      if( this.emailInfo.subject || this.emailInfo.text )
        this.$store.state.composedInfo = this.emailInfo;
      else
        this.$store.state.composedInfo = null;
    },
    'emailInfo.text'(){
      if( this.emailInfo.subject || this.emailInfo.text )
        this.$store.state.composedInfo = this.emailInfo;
      else
        this.$store.state.composedInfo = null;
    }
  },
  computed:{
     ...mapGetters({contacts:'GET_CONTACTS'}),
  }
}
</script>
<style lang="scss" scoped>
.compose::v-deep{
  padding:20px 0 0 0;
  .compose-top{
    & .email-send{
      display: flex;
      flex-direction: row;
      align-items: baseline;
      flex-wrap: wrap;
      > input{width: fit-content;}
    }
    & .compose-to{ max-width: 15px; }
    & .label-to{
      font-size: 14px;
      font-weight: 700;
      padding-right: 1px;
    }
  }
  .email-ad{
    margin: 2px;
    margin-bottom: 0;
    @extend .gray-small-text;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    border-radius: 90px;
    background-color: white;
    align-items: center;
    padding: 5px;
    > span { font-size: 11px; }
    > img{ width: 20px; height: 20px; }
    > svg{ font-size: 15px; }
  }
  .col,.row{
    padding: 0;
  }
  .row{
    margin:0;
    border-bottom: 1px solid $lighter-gray;
    padding-left: 35px;
  }
  input{
    font-size: 14px;
    border: none;
    background-color: transparent;
  }
  textarea{
    margin-top: 10px;
    font-size: 13px; border: none; overflow-y: hidden !important;
    box-shadow: none;
    background-color: transparent;
    ::placeholder{
      font-size: 13px; color: $gray !important;
    }
  }
  textarea:focus{
    border: none
  }
  .sr-only{ display: none;}
  .email-search-container{
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #fff;
    position: absolute ;
    font-size: 12px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin: -38px 0 0 -30px;
    box-shadow: 2px 2px 8px #00000029 !important;
    max-height: 300px;
    & .input-group{
      border-radius: 90px;
      box-shadow: none;
      padding: 0 20px;
      background-color: #fff;
      justify-content: space-between;
      align-items: center;
      box-shadow: inset 0 1px 5px 0 rgb(185 185 185 / 34%) !important;
    }
    & .list-group-item{ 
      border: 0;
      display: flex;
      gap: 10px; }
    & .email-lists{
      img{
        width: 30px; 
        height: 30px;
      }
    }
  }
  .compose-send{
    .btn-group{
      border: none;
        .btn{
          border-color: transparent;
          align-items: center;
          color: #fff;
          background:$blue;
          font-size: 0.8rem;
        }
        .dropdown-menu{
          font-size: 0.8rem;
          padding-left: 0;
          min-width: 0;
        }
    }
    .bi-paperclip{
      transform: rotate(38deg);
    }
    span{ text-decoration: underline; }
    .bi-paperclip,.bi-pencil-fill,span,.bi-trash{
      color: $dark-gray;
      width: 15px;
      height: auto;
    }
    .tools-left{
      display: flex;
      gap: 15px;
      align-items: baseline;
    }
    .row{align-items: baseline; border-bottom: none;}
  }
}
</style>
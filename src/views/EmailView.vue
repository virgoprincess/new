<template>
  <div class="email-component">
      <div class="email-left scrollable">
          <preview-component v-for="(result,i) in messages" :key="i" :data="[result,'email']"/>
      </div>
      <div class="email-center scrollable">
          <!-- <div class="email-fixed-menu"> -->
            <div class="email-menu d-flex justify-content-between">
                <div class="menu-icons d-flex gap-4">
                    <b-icon-envelope-fill></b-icon-envelope-fill>
                    <b-icon-tag-fill></b-icon-tag-fill>
                    <b-icon-exclamation-octagon-fill></b-icon-exclamation-octagon-fill>
                    <b-icon-trash-fill></b-icon-trash-fill>
                </div>

                <div class="menu-pagination d-flex gap-3">
                    <b-icon-caret-left-fill></b-icon-caret-left-fill>
                    <b-icon-caret-right-fill></b-icon-caret-right-fill>
                        2 / 4,302
                </div>
            </div>
            <div class="email-content">
            <!-- create a template for the content -->
            </div>
          <!-- </div> -->
      </div>

      <div class="email-right scrollable">
          <div class="profile-info d-flex flex-column gap-3 align-items-center fs-15">
              <profile-component/>
      </div>

      <div class="shared-media">
        <div class="d-flex justify-content-between align-items-center">
            <p class="fs-26 fw-bold">Shared Media</p>
          <b-link class="blue-small-text">View All</b-link>
        </div>
        <div class="d-flex flex-column gap-3">
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
          <file-icon-component/>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import PreviewComponent from '@/components/commons/PreviewComponent.vue'
import ProfileComponent from '@/components/commons/ProfileComponent.vue'
import FileIconComponent from '@/components/commons/attachments/FileIconComponent.vue'
import { mapGetters } from "vuex"
import axios from 'axios'
export default {
    components:{PreviewComponent, ProfileComponent, FileIconComponent},
    name:'email-component',
    data(){
      return{
        emailIds:[],
        messages:[],
      }
    },
    mounted(){
      console.log("mounted::")
      this.getEmails();
    },
    methods:{
      async getEmails(){
        await axios.get(`https://www.googleapis.com/gmail/v1/users/${this.$store.state.userId}/messages`,{
          headers:{
            Authorization:`Bearer ${this.$store.state.accessToken}`
          },
          params:{
            labelIds:'INBOX',
            includeSpamTrash:false,
            maxResults:20
          }
        })
          .then((response)=>{
           this.emailIds =  response.data.messages;
            console.log("Email Ids::",this.emailIds);
            this.getMessagesById();
          });
      },
      async getMessagesById(){
         this.emailIds.forEach(async(email)=>{
           await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${this.$store.state.userId}/messages/${email.id}`,
          {
            headers:{
              Authorization:`Bearer ${this.$store.state.accessToken}`
            }
          }).then((response)=>{
             var data = response.data.payload.headers
             var msgs = {};
              data.map((res)=>{
              /* console.log("res", res) */
              if(res.name == 'Subject')
                msgs.subject = res.value;
              if(res.name == 'Date')
                {
                  var d =new Date(res.value);
                  msgs.date = d.toLocaleDateString() + " " +d.toLocaleTimeString();
                }
              if(res.name == 'From')
                msgs.from = res.value.split(/</)[0];
              if(res.name == 'To')
                msgs.to = res.value;
                });    
            msgs.snippet = response.data.snippet;
            this.messages.push(msgs);
            });
         });
         console.log("All Messages::", this.messages);

      },
      async getMessages(){
        await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${this.$store.state.userId}/messages/17f993ae4cfc8d11`,{
          headers:{
            Authorization:`Bearer ${this.$store.state.accessToken}`
          },
          /* params:{
            format:"raw",
          }, */
           /* responseType: 'blob' */
        }).then((response)=>{
          var data = response.data.payload.headers
          var msg = {};
          data.map((res)=>{
              if(res.name == 'Subject' || res.name == 'Date' || res.name == 'From' || res.name == 'To')
                msg.push(res);
              /* if(res.name == 'Date')
              console.log("Date:",res.value)
              if(res.name == 'From')
              console.log("From:",res.value)
              if(res.name == 'To')
              console.log("To:",res.value) */
          })

          console.log("Snippet:",response.data.snippet)
            msg.push(response.data.snippet)
            this.messages.push(msg.push);
          /* let reader = new FileReader();
              reader.readAsDataURL(response.data); 
              reader.onload = () => {
                reader.result
                 console.log(reader.result);
              } */
        });

        console.log("All Messages:::", this.messages)
      }
    },
    computed:{
      ...mapGetters({
        results:'GET_EMAILS',
      })
    }
}
</script>

<style lang="scss" scoped>
.email-component{
    width:100%;
    margin: auto;
    position: relative;
    display: flex;
    gap: 20px;

    .email-left{ width: 30% }
    .email-center{ width: 45%; }
    .email-right{ width: 25%; border-left: 1px solid $light-gray !important; }
    /* .email-center,.email-left,.email-right{ height: 100%; } */


      .email-right{
          height: 85vh;
        p{ margin: 0; }
        .profile-info{
            font-weight: 700;
            padding: 30px 0;
            border-bottom: 1px solid $light-gray;
        }
        .shared-media{
            padding: 25px 25px 20px 10px;
            padding-left: 40px;
            > div:first-child{
            padding-bottom: 25px;
            }
        }
      }

      .email-center{
          position: relative;
          .email-menu{
              width: 41%;
              position:fixed;
              border-bottom: 1px solid $light-gray;
              padding: 40px 20px 20px 20px;
              svg{
                  color: $dark-gray;
                  width: 16px;
                  height: auto;
              }
              .menu-pagination{
                  color: $black;
                  font-weight: 600;
                  svg{color: $black;}
              }
          }
      }
}

</style>
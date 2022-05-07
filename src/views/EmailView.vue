<template>
  <div class="email-component" v-if="results.length > 0">
      <div class="email-left scrollable" >
         <b-list-group-item v-show="newEmail" class="new-message" @click="composeEmail" :class="newMessage ? 'selected': ''">
          <div class="draft d-flex gap-3">
              <b-img rounded="circle" src="https://lh3.googleusercontent.com/a/AATXAJzMWOnYLEs5DFxS3pzirHMbjQv4Qhc5_S9C6fna=s96-c" alt="" /> 
            <div class="d-flex flex-column w-100">
              <div class="d-flex justify-content-between">
                  <p class="name fs-12">{{ composedEmail ? '[Draft]' :'New Email'}}</p>
                  <p class="date">10:10 am</p>
              </div>
              <p class="email-subj">{{ composedEmail ? composedEmail.subject ? composedEmail.subject : '[No Subject]':'' }}</p>  <!-- this is for email -->
              <div class="msg">{{ composedEmail ? composedEmail.text ? composedEmail.text.slice(0,20)+'...' :'':''  }}</div>
            </div>
          </div>
         </b-list-group-item>
          <preview-component @click-mail="getThread(result)" :selectedId="selectedMessage" v-for="(result,i) in results" :key="i" :data="[result,'email']"/>
      </div>
      <div class="email-center scrollable">
        <compose-component v-if="newEmail && newMessage"/>
        <div class="emails" v-else>
            <div class="email-menu d-flex justify-content-between">
                <div class="menu-icons d-flex gap-4">
                    <b-icon-envelope-fill></b-icon-envelope-fill>
                    <b-icon-tag-fill></b-icon-tag-fill>
                    <b-icon-exclamation-octagon-fill></b-icon-exclamation-octagon-fill>
                    <b-icon-trash-fill @click="showModal = !showModal"></b-icon-trash-fill>
                </div>

                <div class="menu-pagination d-flex gap-3">
                    <b-icon-caret-left-fill></b-icon-caret-left-fill>
                    <b-icon-caret-right-fill></b-icon-caret-right-fill>
                        2 / 4,302
                </div>
            </div>
            <b-overlay :show="show" rounded="sm" opacity="1" class="thread-loader">
              <div class="email-content" v-if="threads">
                <div class="thread" v-for="(thread,i) in threads.thread" :key="i">
                  
                    <h3 v-show="i == 0">{{thread.Subject}}</h3>
                  <div class="d-flex justify-content-between">
                    <p class="thread-name">{{thread.From}}</p>
                    <p class="thread-date">{{thread.Date}}</p>
                  </div>

                  <p :style="(threads.thread.length -1 ) == i ? 'display:none' : 'display:block'" class="thread-snippet" :class="'thread-snippet'+i"  @click="toggleDisplay(i)" v-html="'<div>'+thread.snippet+'</div>'"></p>
                  <div v-for="(part,k) in thread.content.contentData" :key="k">
                    
                    <div :style="(threads.thread.length -1 ) == i ? 'display:block' : 'display:none'" :class="'thread-content'+i">

                      <div class="thread-content"  v-html="'<div><p>'+part.data+'</p></div>'"> </div>

                      <div :style="threads.hasAttachments ? 'display:block' : 'display:none'" class="attachment-container">
                        <h6>Attachments</h6>
                        <div class="attachments" >
                          <div v-for="(attachment,i) in thread.content.attachments" :key="i" >
                            <image-component :data="attachment.attachInfo" v-if="attachment.mimeType == 'image/jpeg' || attachment.mimeType == 'image/jpg' ||attachment.mimeType == 'image/png'"/>
                            <a class="black-small-text" :href="attachment.attachInfo.fileUrl" :download="attachment.attachInfo.fileName" v-else>{{ attachment.attachInfo.fileName.slice(0,9)+'...' }}</a>
                          </div>
                        </div>
                      </div>

                    </div>
                    

                  </div>
                </div>
                <reply-forward/>
                <div></div>
              </div>
            </b-overlay>
        </div>
            
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
      <b-modal id="delete-modal" centered v-model="showModal">
        <div>
          <b-icon icon="envelope-open-fill"></b-icon>
          <h4>Delete email</h4>
          <p class="fs-12">Are you sure you want to delete this email?<br>Doing so will move it to Trash for 90 days.</p><br>
        </div>
        <template #modal-footer>
          <div class="footer">
            <b-link class="cancel" @click="showModal=!showModal">Cancel</b-link>
          <b-link @click="showModal=!showModal">Done</b-link>
          </div>
        </template>
      </b-modal>
  </div>
</template>

<script>
import PreviewComponent from '@/components/commons/PreviewComponent.vue'
import ProfileComponent from '@/components/commons/ProfileComponent.vue'
/* import ReplyForward from '@/components/commons/ReplyForwarComponent.vue' */
import FileIconComponent from '@/components/commons/attachments/FileIconComponent.vue'
import ReplyForward from '@/components/dashboard/ReplyForwardComponent.vue'
import ComposeComponent from '@/components/commons/ComposeComponent.vue'
import ImageComponent from '@/components/commons/attachments/ImageComponent.vue'
/* import FileComponent from '@/components/commons/attachments/FileComponent.vue' */
import { mapGetters } from "vuex"
export default {
    components:{PreviewComponent, ProfileComponent,ReplyForward,ComposeComponent,FileIconComponent,ImageComponent},
    name:'email-component',
    data(){
      return{
        emailIds:[],
        show: false,
        initCall:true,
        selectedMessage:'',
        newMessage:false,
        showModal:false,
        emailAttachments:[
          {fileType:"image",fileUrl:'/images/image-file.jpg',fileName:"Sample.jpg"},
          {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Guide.pdf",fileSize:"100 MB"},
        ]
      }
    },
    methods:{
      composeEmail(){
        this.newMessage = true;
        this.selectedMessage = ''
      },
      getThread(res){
        this.newMessage = false;
        this.show = true;
        this.selectedMessage = res.threadId;
        this.$store.dispatch("GET_THREADSBYID",res);
        if(document.getElementsByClassName('thread-content')){
          var length = document.getElementsByClassName('thread-content').length;

          for(var i=0; i<length; i++){
            if( i == length -1 ){
              document.getElementsByClassName('thread-content')[i].style.display = 'block';
              document.getElementsByClassName('thread-snippet')[i].style.display = 'none';
            }else{
              document.getElementsByClassName('thread-content')[i].style.display = 'none';
              document.getElementsByClassName('thread-snippet')[i].style.display = 'block';
            }
          }
        }
      },
      toggleDisplay(val){
        var tagClass = 'thread-content'+val;
        var snippetClass = 'thread-snippet'+val;
        document.getElementsByClassName(tagClass)[0].style.display = 'block';
        document.getElementsByClassName(snippetClass)[0].style.display = 'none';
      }
    },
    computed:{
      ...mapGetters({
        results:'GET_EMAILS',
        messages:'GET_MESSAGES',
        threads:'GET_THREADS',
        newEmail:'GET_ISADDNEW',
        composedEmail:'GET_COMPOSEDINFO'
      }),

    },
   watch:{
    threads(){
      if( this.threads.hasAttachments && this.threads.attachmentsAdded ){
        this.threads.thread.map(th =>{
          th.content.attachments.map(attachment =>{
            let attachInfo = {};
            attachInfo.fileUrl =`data:${attachment.mimeType};base64,${attachment.data}`;
            attachInfo.fileName = attachment.filename;
            attachInfo.size = attachment.size;
            attachment.attachInfo = attachInfo
          })
        })
      }
        this.show = false;
    },
    results(){
      if(this.initCall) {
        /* var tempEmails = this.results;
        tempEmails = Array.from(new Set(tempEmails.map(email => email.threadId))).map(threadId => {
								return tempEmails.find(email => email.threadId === threadId)
							}); 
        console.log("New TempEmails::",tempEmails); */
        this.$store.dispatch("GET_THREADSBYID",this.results[0]);
        this.selectedMessage = this.results[0].threadId;
        this.initCall = false;
      }
    },
    newEmail(){
      if(!this.newEmail){
        this.newMessage = false;
        this.$store.dispatch("GET_THREADSBYID",this.results[0]);
        this.selectedMessage = this.results[0].threadId;
        this.initCall = false;
      }else{
        this.newMessage = true;
        this.selectedMessage = ''
      }
    }
  },
  updated(){
    var previewTags = document.getElementsByClassName("preview-list");
    for( let i=0; i<previewTags.length;i++ ){
      var p = previewTags[i].getElementsByTagName('p');
      for(let x=0; x<p.length;x++){
        p[x].style.cssText += 'margin: 0 !important';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.thread-loader{height: 86vh; z-index: 1;}
.email-component{
    width:100%;
    margin: auto;
    position: relative;
    display: flex;
    gap: 20px;

    .email-left{ 
      width: 25%;
    }
    .email-center{ width: 55%; }
    .email-right{ width: 20%; border-left: 1px solid $light-gray !important; }
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
              width: 51%;
              position:fixed;
              border-bottom: 1px solid $light-gray;
              background-color: $background-color;
              padding: 40px 20px 20px 20px;
              z-index: 2;
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
          .thread-content{ font-size: 14px; }
      }

    .email-content{
      cursor: pointer;
      padding: 120px 20px 0;
      p{ font-size: 14px; margin: 0 ; }
      .thread:not(:nth-last-child(-n+3)){ border-bottom: 1px solid $light-gray; }
      .thread{padding: 20px 0;}
      .thread-name{ font-weight: 800;}
      .thread-date{ color: $gray; font-size: 11px; font-weight: 600;}
      .attachment-container::v-deep{
        
        border-top: 1px solid $lighter-gray;
        padding: 10px;
        .attachments{
          display: flex;
          gap: 10px; 
          align-items: flex-end;
        }
          img,.file-type{
            border-radius: 2px !important;
            }
          img{ height: auto;}
        .file-type{ 
          border: 1px solid $light-gray; border-radius: 2px !important;
          background-color: #fff;
          width: 95px;
          height: 54px;
          padding: 15px;
          .file-name{font-weight: 500; color: $black; margin: 0 !important;}
          .file-size{margin:10px 0 !important}
          p{ font-size: 13px;font-weight: 400 !important;}
         }
        }
    }
    .new-message{
      p{margin: 0;}
      border: none;
      padding-bottom: 0;
       & .draft{ 
         padding: 15px 0;
          border-bottom: 1px solid $light-gray;
       }
      img{
          width: 40px;
          height: 40px;
      }
    }
    .selected{ background-color: transparent; }
    .name,.email-subj{ font-size: 15px; font-weight: 700;}
    .date{font-size: 12px; color: $gray; font-weight: 500;}
    .msg{font-size: 13px; color: $gray; font-weight: 500;}
}

</style>
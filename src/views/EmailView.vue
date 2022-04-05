<template>
  <div class="email-component" v-if="results.length > 0">
      <div class="email-left scrollable">
          <preview-component @click-mail="getThread(result)" v-for="(result,i) in results" :key="i" :data="[result,'email']"/>
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
            <b-overlay :show="show" rounded="sm" opacity="1" class="thread-loader">
              <div class="email-content" v-if="threads">
                <div class="thread" v-for="(thread,i) in threads" :key="i">
                  
                    <h3>{{thread.Subject}}</h3>
                  <div class="d-flex justify-content-between">
                    <p class="thread-name">{{thread.From}}</p>
                    <p class="thread-date">{{thread.Date}}</p>
                  </div>

                  <div v-for="(part,i) in thread.content" :key="i">
                    <!-- <div v-if="part.mimeType == 'text/plain'">{{ part.data }}</div> -->
                    <div v-html="'<div>'+part.data+'</div>'"></div>
                  </div>

                </div>
                <div></div>
              </div>
            </b-overlay>
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
export default {
    components:{PreviewComponent, ProfileComponent, FileIconComponent},
    name:'email-component',
    data(){
      return{
        emailIds:[],
        show: false,
      }
    },
    methods:{
      getThread(res){
        this.show = true;
        this.$store.dispatch("GET_THREADSBYID",res);
      },
    },
    computed:{
      ...mapGetters({
        results:'GET_EMAILS',
        messages:'GET_MESSAGES',
        threads:'GET_THREADS',
      })
    },
  watch:{
    threads(){
      console.log("threads changed:::")
        this.show = false;
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
      }

    .email-content{

      p{ font-size: 14px; margin: 0; }
      padding-top: 120px;
      .thread{ border-bottom: 1px solid $light-gray;    padding: 20px 0; }
      .thread-name{ font-weight: 800;}
      .thread-date{ color: $gray; font-size: 11px; font-weight: 600;}
    }
}

</style>
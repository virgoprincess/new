<template>
  <div id="app">
    <v-app>
      <main-view-container/>
    </v-app>
  </div>
</template>

<script>
import MainViewContainer from './MainViewContainer.vue'

export default {
  name: 'App',
  components: {
    MainViewContainer
  }
}
</script>

<style lang="scss">
html, body{
  height: 100%;
  overflow: hidden;
}
#app {
  color: $black;
  padding:0;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  height: fit-content;
  position: relative;
  background-color: #fff;
}
#app::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge add Firefox */
#app{
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

.btn-group{ cursor: pointer; }
.btn:focus, input:focus { box-shadow: none !important;}

.v-application{
  .v-menu__content {
  max-width: 450px !important;
  background-color: #fff;
  color: black;
  padding: 10px 30px;
    > p{ margin: 0;}
    .grey.lighten-4{background-color: #fff !important;}
    .icon-circle{ color:$dark-blue !important;}
    .event-toolbar{ 
      display: flex; 
      justify-content: space-between;
      }
    .event-name{ font-weight: 700; margin: 0;}
    .event-time{ color: $gray; font-weight: 500; }
    .event-details{font-weight: 400; margin: 0;}
  }
}
.modal-content{
    width: 80% !important;
    padding: 10px !important;
    p{ margin: 0; padding: 0;  }
      .footer{
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        .cancel{ color: $gray; }
        a{
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
        }
      }
     header,.modal-body{
       padding: 0 1rem;
       border: 0;
     }
     footer{
       padding: 0.5rem 1rem;
       border: 0;
     }
    }
    #share-modal{
      .modal-content{
        .search-recipient,.recipient-options,.document-link{ >p{ padding: 6px 0 5px 0;} }
          & .recipient-options{
            .btn{padding: 2px 10px;}
            .btn,.dropdown-menu{
              min-width: 80px;
              width: 80px;
              text-align: center;
              color: $gray;
              font-size: 12px;
              font-weight: 600;
              background-color: #fff !important;
              border-color: $lighter-gray;
              .dropdown-item{text-align: center; color: $gray;}
              .dropdown-item:active,.dropdown-item:hover{
                background-color: $gray; color: #fff; 
              }
            }
            .list-group-item{ border: none;padding:5px 0; }
          }
          & .search-recipient{
            > div{
              height: 40px;
              align-content: center;
            }
            input{ font-size: 12px;border-color: $lighter-gray; }
            input:focus{ border-color: $lighter-gray; }
            input::placeholder{ font-style: italic; color: $gray; font-weight: 600;}
            .btn{ font-size: 12px; color: #fff; background-color: $blue; }
          }
          & .document-link{
              > div{height: 40px; align-items: center;}
              .input-group-text,.form-control{ 
                background-color: transparent;
                border: none; 
                font-size: 12px;
                font-weight: 600;
                }
              .input-group{
                margin-bottom: 0 !important; 
                border: 1px solid $lighter-gray;
                border-radius: 5px;
              }
            }
      }
    }
    #delete-modal{
      .modal-content .modal-body{
        text-align: center;
        svg{
          color: #CC5959;
          width: 30px;
          height: auto;
        }
      }
    }
</style>

<template>
  <div class="contacts-component">
      <p class="fs-28 fw-500">Contacts</p>
      <div class="contacts-navbar d-flex justify-content-between">
          <b-nav>
              <b-nav-item @click="tabChanged('all')" :class="menu == 'all' ? 'blue-small-text': 'gray-small-text'">All</b-nav-item>
              <b-nav-item @click="tabChanged('internal')"  :class="menu == 'internal' ? 'blue-small-text': 'gray-small-text'">Internal</b-nav-item>
              <b-nav-item @click="tabChanged('external')"  :class="menu == 'external' ? 'blue-small-text': 'gray-small-text'">External</b-nav-item>
          </b-nav>
          <b-nav class="align-items-center">
              <span class="gray-small-text">Sort by:</span>
            <b-nav-item-dropdown class="black-small-text" text="Alphabetical">
                <b-dropdown-item right class="black-small-text">Alphabetical</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>
      </div>
          <div class="contact-lists scrollable">
              <table class="tabletable-bordered ">
                <thead>
                    <tr>
                        <th></th>
                        <th style="width:20%">Name</th>
                        <th>Title</th>
                        <th>Team</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th style="width:20%">Email</th>
                        <th>Calendar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(contact,i) in current" :key="i">
                        <td> <b-img rounded="circle" :src=" contact.photoUrl != '' ? contact.photoUrl : require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> {{ contact.name != '' ? contact.name : 'None' }} </td>
                        <td> {{ contact.title != '' ? contact.title : 'None' }} </td>
                        <td> {{ contact.org != '' ? contact.org : 'None' }}</td>
                        <td> {{ contact.location != '' ? contact.location : 'None' }} </td>
                        <td> <b-icon-telephone></b-icon-telephone> <span>{{ contact.phone != '' ? contact.phone : 'None' }}</span> </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> <span>{{ contact.email != '' ? contact.email : 'None' }}</span>  </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> <span>View</span></td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>                    
                </tbody>
              </table>
          </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'ContactsComponent',
    data(){
        return{
            menu:'all',
            current:[],
        }
    },
    computed:{
        ...mapGetters({contacts:'GET_CONTACTS'}),
    },
    watch:{
        contacts:function(){
            console.log("watcher::");
            this.current = this.contacts.all;
        }
    },
    methods:{
        tabChanged(val){
            console.log("Menu:::", val);
            this.menu = val ;
            if( this.menu == 'all' ) this.current = this.contacts.all;
            if( this.menu == 'internal' ) this.current = this.contacts.internal;
            if( this.menu == 'external' ) this.current = this.contacts.external;
        }
    },
/*     data(){
      return{
        menu:'contacts'
      }
    },
    mounted(){
      this.$store.dispatch("SET_CURRENTMENU",this.menu)
    } */
}
</script>

<style lang="scss" scoped>
.contacts-component{
    max-height: 86vh;
    width:100%;
    padding: 40px;
    img{
        width: 34px;
        height: 34px;
    }
    .contact-lists{ max-height: 67vh; }
    .contact-lists table{
        width: 100%;
    }
    table {
        border-collapse: separate;
        border-spacing: 0 15px;
        table-layout: fixed;
        word-wrap: break-word;
    }
    td{ @extend .fs-14;}
    th,td {
        text-align: left;
        border-bottom: 1px solid $light-gray;
        padding: 10px;
    }
    .contacts-navbar,th{
        position: sticky;
        position: -webkit-sticky;
        background-color: $background-color;
        top: 0;
    }
    .contacts-navbar{z-index: 3;}
    th{ z-index: 2; @extend .gray-small-text; }
}
</style>
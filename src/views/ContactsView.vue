<template>
  <div class="contacts-component" v-if="contacts.all ? contacts.all.length > 0 ? true : false : false">
      <p class="fs-28 fw-500">Contacts</p>
      <div class="contacts-navbar d-flex justify-content-between">
          <b-nav class="align-items-center">
              <b-nav-item @click="tabChanged('all')" :class="menu == 'all' ? 'blue-small-text': 'gray-small-text'"><span>All</span></b-nav-item>
              <b-nav-item @click="tabChanged('internal')"  :class="menu == 'internal' ? 'blue-small-text': 'gray-small-text'"><b-icon-dot></b-icon-dot><span>Internal</span></b-nav-item>
              <b-nav-item @click="tabChanged('external')"  :class="menu == 'external' ? 'blue-small-text': 'gray-small-text'"><span>External</span></b-nav-item>
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
                        <th style="width:2%"></th>
                        <th style="width:5%"></th>
                        <th style="width:15%">Name</th>
                        <th>Title</th>
                        <th>Team</th>
                        <th>Location</th>
                        <th style="width:15%">Phone</th>
                        <th style="width:20%">Email</th>
                        <th>Calendar</th>
                        <th style="width:2%"></th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(contact,i) in current" :key="i" :class="contact.type == 'internal' && menu == 'all' ? 'internal': ''">
                        <td> <b-icon-dot v-show="contact.type == 'internal' && menu == 'all'"></b-icon-dot> </td>
                        <td> <b-img rounded="circle" :src=" contact.photoUrl != '' ? contact.photoUrl : require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> {{ contact.name != '' ? contact.name : 'None' }} </td>
                        <td> {{ contact.title != '' ? contact.title : 'None' }} </td>
                        <td> {{ contact.org != '' ? contact.org : 'None' }}</td>
                        <td> {{ contact.location != '' ? contact.location : 'None' }} </td>
                        <td> <b-icon-telephone-fill></b-icon-telephone-fill> <span>{{ contact.phone != '' ? contact.phone : 'None' }}</span> </td>
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
             if( this.contacts.all ){
                this.contacts.all.sort(this.sortContactsbyName);
                this.contacts.all.map(contact =>{
                    if(contact.phone){
                        contact.phone = this.formatPhone(contact.phone);
                    }
                    return contact;
                })
             }
            this.current = this.contacts.all;
        }
    },
    methods:{
        sortContactsbyName(a,b){
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if(nameA > nameB) return 1;
            else if (nameA < nameB) return -1;

            return 0;
        },
        tabChanged(val){
            this.menu = val ;
            if( this.menu == 'all' ) this.current = this.contacts.all;
            if( this.menu == 'internal' ) this.current = this.contacts.internal;
            if( this.menu == 'external' ) this.current = this.contacts.external;
        },
        //this format is applicable for US phone numbers only
        formatPhone(phone){
            phone = ''+phone.replace(/\D/g,'');
            const match = phone.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            if( match ){
                var intlCode = (match[1] ? '+1 ' : '');
                return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
            }
            return phone;

            /* phone = ''+phone.replace(/\D/g,'');
            const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})(\d{0,4})$/);
            if(match) phone = `(${match[1]}${match[2] ? ') ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}${match[4] ? ' x' : ''}${match[4]}`;
            return phone; */
        }
    },
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
    .contacts-navbar > ul{gap: 20px;}
    th{ z-index: 2; @extend .gray-small-text; }
    .internal{
        .bi-telephone-fill,.bi-envelope-fill{ color:$blue; }
        /* .bi-dot{width: 30px; height: 30px; vertical-align: middle; color: $blue;} */
    }
    .bi-dot{width: 30px; height: 30px; vertical-align: middle; color: $blue;}
    .nav-link{padding: 0;}
    .blue-small-text > a >span{
        border-bottom: 2px solid $blue;
    }
}
</style>
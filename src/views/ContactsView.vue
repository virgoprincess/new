<template>
  <div class="contacts-component">
      <p class="fs-28 fw-500">Contacts</p>
      <div class="contacts-navbar d-flex justify-content-between">
          <b-nav>
              <b-nav-item class="blue-small-text">All</b-nav-item>
              <b-nav-item class="gray-small-text">Internal</b-nav-item>
              <b-nav-item class="gray-small-text">External</b-nav-item>
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
                        <th>Name</th>
                        <th>Title</th>
                        <th>Team</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Calendar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> <span>(123) 456-7890</span> </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> <span>sheather@companyemail.com</span>  </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> <span>View</span></td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                        <td> <b-icon-envelope-fill></b-icon-envelope-fill> heather@companyemail.com </td>
                        <td> <b-icon-calendar-fill></b-icon-calendar-fill> View</td>
                        <td> <b-icon-caret-right-fill></b-icon-caret-right-fill> </td>
                    </tr>
                </tbody>
              </table>
          </div>
  </div>
</template>

<script>
export default {
    name:'ContactsComponent',
    mounted(){
      this.$store.commit("SET_LOADER",false);
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
    }
    td{ @extend .fs-14;}
    th,td {
        text-align: center;
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
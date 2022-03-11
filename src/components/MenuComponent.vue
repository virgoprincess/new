<template>
  <div id="menu">
    <div class="top-menu">
      <b-row align-h="end">
        <!-- <b-col md="7" class="search ml-md-auto">
          <b-input-group>
            <b-icon-search />
            <b-form-input type="search" placeholder="Search"></b-form-input>
          </b-input-group>
        </b-col> -->
        <b-col cols="2" class="add-new">
          <b-button-group>
            <b-button variant="outline-primary">
              <b-icon-plus /> Add New
            </b-button>
          </b-button-group>
        </b-col>
        <b-col cols="1" class="profile">
          <b-img
            rounded="circle"
            :src="require('@/assets/icons/man.jpg')"
            alt=""
          />
        </b-col>
      </b-row>
    </div>

    <div class="left-menu">
      <div class="menu-container">
        <ul>
          <b-img
            class="logo"
            :src="require('@/assets/icons/logo.png')"
            alt="Left image"
          ></b-img>
          <li @click="menuClicked('DASHBOARD')" :class="menu == 'DASHBOARD'? 'menu-active': 'menu-inactive'"><b-icon-app></b-icon-app></li>
          <li @click="menuClicked('MESSAGES')" :class="menu == 'MESSAGES'? 'menu-active': 'menu-inactive'"><b-icon-chat-dots></b-icon-chat-dots></li>
          <li @click="menuClicked('EMAILS')" :class="menu == 'EMAILS'? 'menu-active': 'menu-inactive'"><b-icon-envelope></b-icon-envelope></li>
          <li @click="menuClicked('CALENDAR')" :class="menu == 'CALENDAR'? 'menu-active': 'menu-inactive'"><b-icon-calendar4></b-icon-calendar4></li>
          <li @click="menuClicked('CONTACTS')" :class="menu == 'CONTACTS'? 'menu-active': 'menu-inactive'"><b-icon-people></b-icon-people></li>
          <li @click="menuClicked('STORAGE')" :class="menu == 'STORAGE'? 'menu-active': 'menu-inactive'"><b-icon-folder2></b-icon-folder2></li>
          <li @click="menuClicked('SETTINGS')" :class="menu == 'SETTINGS'? 'menu-active': 'menu-inactive'"><b-icon-gear></b-icon-gear></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: "MenuComponent",
  data(){
    return{
      reroute:false,
    }
  },
  created(){
    this.initialLoad();
  },
  methods:{
    initialLoad(){
      this.$store.dispatch("SET_"+this.$store.state.menu);
    },
    menuClicked(menu){
        (this.menu != menu && this.$route.path != '/home/'+menu.toLowerCase()) ? this.reroute = true : this.reroute = false;
        
        this.$store.dispatch("SET_CURRENTMENU",menu);
        this.$store.dispatch("SET_"+menu);
        if( this.reroute ) this.$router.push({path: '/home/'+menu.toLowerCase()});

    }
  },
  computed:{
    ...mapGetters({
      menu : "GET_CURRENTMENU",
    }),

  },
};
</script>

<style lang="scss" scoped>
#menu {
  width: 100%;
  margin: auto;
  position: relative;
}
.top-menu{
  height: 100px;
}
.top-menu > .row {
  max-width: 1920px;
  position: fixed;
  gap: 20px;
  align-items: center;
  padding: 25px;
  z-index: 50;
  margin: 0 5px;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid $light-gray;
}
.left-menu {
  position: fixed;
  background-color: #fff;
  margin: auto;
  height: 100%;
  width: 100px;
  top: 0;
  /* left: 0; */
  /* margin-left:-15px; */
  z-index: 51;

  .logo {
    padding: 35px 0;
  }
  .menu-container {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      a{ line-height: 0; }
    }
    ul li:not(:first-child) {
      padding: 10px;
    }
  }
  svg {
    width: 23px;
    height: auto;
    color: $dark-gray;
  }
}
.menu-active {

  border: 1px solid $light-blue;
  border-radius: 50%;
  svg {
    color: $light-blue;
    transition: color 0.15s ease-in;
    /* transition-duration: 0.10s; */
  }
}
.menu-inactive{
  border: none;
  border-radius:0
  svg {
    color: $dark-gray;
  }
}
.logo,
.profile img {
  width: 33px;
}
b-icon-search {
  width: 20px;
}
.add-new {
  text-align: right;
  .btn-group {
    align-items: center;
    button {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 5px;
      border: 2px solid $blue;
      color: $black;
      font-weight: 600;
      border-radius: 5px;
    }
  }
  .bi-plus {
    font-size: 25px !important;
    color: $blue;
  }
}
::placeholder {
  color: $gray !important;
}
.search {
  input {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 400;
    border: none;
  }
  svg {
    color: $gray;
  }
  > div {
    align-items: center;
    gap: 10px;
  }
}
</style>
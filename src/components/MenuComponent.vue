<template>
  <div id="menu">
    <div class="top-menu">
      <b-row align-h="end">
        <b-col md="7" class="search ml-md-auto">
          <b-input-group>
            <b-icon-search />
            <b-form-input type="search" placeholder="Search"></b-form-input>
          </b-input-group>
        </b-col>
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
          <!-- <li> <b-img class="logo" :src="require('@/assets/icons/logo.png')" alt="Left image"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/menu.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/messenger.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/envelope.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/calendar.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/user.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/folder.png')"></b-img> </li>
          <li> <b-img :src="require('@/assets/icons/setting.png')"></b-img> </li> -->
          <b-img
            class="logo"
            :src="require('@/assets/icons/logo.png')"
            alt="Left image"
          ></b-img>
          <li><router-link :to = "{ name: 'dashboard' }"><b-icon-app></b-icon-app></router-link></li>
          <li><router-link :to = "{ name: 'messages' }"><b-icon-chat-dots></b-icon-chat-dots></router-link></li>
          <li><router-link :to = "{ name: 'email' }"><b-icon-envelope></b-icon-envelope></router-link></li>
          <li><router-link :to = "{ name: 'calendar' }"><b-icon-calendar4></b-icon-calendar4></router-link></li>
          <li><router-link :to = "{ name: 'contacts' }"><b-icon-people></b-icon-people></router-link></li>
          <li><router-link :to = "{ name: 'storage' }"><b-icon-folder2></b-icon-folder2></router-link></li>
          <li><router-link :to = "{ name: 'settings' }"><b-icon-gear></b-icon-gear></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style lang="scss" scoped>
#menu {
  width: 98%;
  margin: auto;
}
.top-menu > .row {
  position: fixed;
  gap: 20px;
  align-items: center;
  padding: 25px;
  z-index: 50;
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
  left: 0;
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
  padding: 10px;
  border: 2px solid $light-blue;
  border-radius: 50%;
  svg {
    color: $light-blue;
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
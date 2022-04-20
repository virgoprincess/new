<template>
  <div class="notifications">
      <div class="main-title">Notifications</div>
      <div class="notif-container">
          <b-img rounded :src="require('@/assets/images/image-file.jpg')" alt="" />
          <div>
              <div class="notif-title">Earth Quake Drill</div>
              <div class="notif-message">Please participate the drill which will happen anytime today.</div>
          </div>
      </div>
      <div class="notif-container">
          <b-img rounded :src="require('@/assets/images/image-file.jpg')" alt=""/>
          <div>
              <div class="notif-title">Wear Mask</div>
              <div class="notif-message">Wear your mask at all times.</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'NotificationsComponent'
}
</script>

<style lang="scss" scoped>
    .notifications{
        background-color: #fff;
        width: 100%;
        position: relative;
        height: fit-content;
        border-radius: 5px;
        padding: 20px;

        .main-title{ font-size: 18px; font-weight: 600; }
        .notif-container{
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            img{
                width: 60px;
                height: 60px;
            }

            .notif-title{ font-weight: 700; font-size: 15px; }
            .notif-message{ color: $gray;font-weight: 500; font-size: 14px; }
        }
    }
</style>
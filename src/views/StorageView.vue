<template>
  <div class="storage-component">
      <div>
        <h5>Recently Viewed</h5>
        <div class="d-flex">
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text class="d-flex justify-content-between">
            <div><b-icon-file-earmark-medical-fill></b-icon-file-earmark-medical-fill> Project</div>
            <p>20 MB</p>
          </b-card-text>
        </b-card>   

          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text class="d-flex justify-content-between">
            <div><b-icon-camera-video-fill></b-icon-camera-video-fill> Project </div>
            <p>20 MB</p>
          </b-card-text>
        </b-card>   

        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text class="d-flex justify-content-between">
            <div><b-icon-image-fill></b-icon-image-fill> Project </div>
            <p>20 MB</p>
          </b-card-text>
        </b-card>    

        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text class="d-flex justify-content-between">
            <div><b-icon-camera-video-fill></b-icon-camera-video-fill> Project </div>
            <p>20 MB</p>
          </b-card-text>
        </b-card>            
        </div>

        
        <div class="storage-navbar d-flex justify-content-between">
          <h5>Storage</h5>
          <b-nav class="align-items-center">
              <span class="gray-small-text">Sort by:</span>
            <b-nav-item-dropdown class="black-small-text" text="Alphabetical">
                <b-dropdown-item right class="black-small-text">Alphabetical</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>
      </div>
        <div class="files-list scrollable">
              <table class="tabletable-bordered ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>File Size</th>
                        <th>Shared With</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(file,i) in files" :key="i">
                      <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                      <td class="fw-700"> {{file.name}} </td>
                      <td> {{file.owner}} </td>
                      <td> {{file.lastModified}}</td>
                      <td> {{file.fileSize}} </td>
                      <td> <b-img rounded="circle" :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                    </tr>
                    <!-- <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr>
                    <tr>
                        <td> <b-img rounded :src="require('@/assets/icons/man.jpg')" alt="" /> </td>
                        <td class="fw-700"> Bruce Scott </td>
                        <td> Sales Manager </td>
                        <td> Sales</td>
                        <td> Lehi, UT </td>
                        <td> <b-icon-telephone></b-icon-telephone> (123) 456-7890 </td>
                    </tr> -->
                </tbody>
              </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'StorageComponent',
    data(){
      return{
        files:[
          {
            name:'Design file.ai',
            owner:'Me',
            lastModified:'Aug 20, 2021 me',
            fileSize:'63 MB'
          },
          {
            name:'Logo mockups for Company',
            owner:'Me',
            lastModified:'Jul 12, 2021 me',
            fileSize:'12 MB'
          },
          {
            name:'Sketches.png',
            owner:'Me',
            lastModified:'Mar 05, 2021 Heather',
            fileSize:'39 MB'
          },
          {
            name:'IMG3902.jpg',
            owner:'Me',
            lastModified:'Aug 20, 2021 me',
            fileSize:'63 MB'
          },
          {
            name:'Design file.ai',
            owner:'Me',
            lastModified:'Aug 20, 2021 me',
            fileSize:'63 MB'
          },
        ],
      }
    }
}
</script>

<style lang="scss" scoped>
.storage-component{
  max-height: 86vh;
  width:100%;
  padding: 40px;
}
p{
  margin: 0;
}
.bi-file-earmark-medical-fill{ color: $dark-blue;}
.bi-camera-video-fill{ color: $yellow; }
.bi-image-fill{ color:$green; }

.files-lists{ 
  max-height: 67vh; 
  
    
  }
  .files-lists table{
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
      img{
    width: 50px;
    height: 50px;
    }
  }
  .storage-navbar,th{
      position: sticky;
      position: -webkit-sticky;
      background-color: $background-color;
      top: 0;
  }
  .storage-navbar{z-index: 3;}
  th{ z-index: 2; @extend .gray-small-text; }
</style>
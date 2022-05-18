<template>
  <div class="storage-component d-flex justify-content-between" v-if="files.length > 0">
    <div class="left-section">
      <h5>Recently Viewed</h5>
      <div class="d-flex gap-3">
        <b-card
          :img-src="file.thumbnailLink ? file.thumbnailLink : 'https://picsum.photos/600/300/?image=25'"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
          v-for="(file, i) in files.slice(0,4)"
          :key="i"
        >
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <b-icon-file-earmark-medical-fill
                v-show="file.fileType == 'file'"
              ></b-icon-file-earmark-medical-fill>
              <b-icon-camera-video-fill
                v-show="file.fileType == 'video'"
              ></b-icon-camera-video-fill>
              <b-icon-image-fill
                v-show="file.fileType == 'image'"
              ></b-icon-image-fill>
              <span class="fs-12 fw-700 pl-1">{{ file.originalFilename }}</span>
            </div>
            <span class="fs-9 fw-700">{{ file.size}} {{ file.sizeExt }}</span>
          </div>
        </b-card>
      </div>

      <div class="storage-navbar d-flex justify-content-between">
        <h5>Storage</h5>
        <b-nav class="align-items-center">
          <span class="gray-small-text">Sort by:</span>
          <b-nav-item-dropdown class="black-small-text" text="Alphabetical">
            <b-dropdown-item right class="black-small-text"
              >Alphabetical</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-nav>
      </div>
      <div class="files-list scrollable">
        <table class="tabletable-bordered">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Owner</th>
              <th>Last Modified</th>
              <th>File Size</th>
              <th>Shared With</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(file, i) in files" :key="i">
              <td class="option w-3">
                <b-icon-three-dots-vertical class="elipsis" @click="showOption(i)"/>
                <b-list-group :id="'option-menu'+i" class="file-options" @mouseleave="hideOption(i)">
                  <b-list-group-item @click="hideOption(i);showModal = !showModal" >Share</b-list-group-item>
                  <b-list-group-item @click="hideOption(i)">Move to</b-list-group-item>
                  <b-list-group-item @click="hideOption(i)">Rename</b-list-group-item>
                  <b-list-group-item @click="hideOption(i)">View Details</b-list-group-item>
                  <hr/>
                  <b-list-group-item @click="hideOption(i)">Download</b-list-group-item>
                  <b-list-group-item @click="hideOption(i)">Remove</b-list-group-item>
                </b-list-group>
              </td>
              <td class="w-6">
                <b-img
                  rounded
                  :src="file.thumbnailLink"
                  alt=""
                />
              </td>
              <td class="fw-700">{{ file.originalFilename}}</td>
              <td>
                <!-- {{ file.ownedByMe ? 'Me' : 'Other' }} -->
                  <div v-for="(owner,i) in file.owners" :key="i">
                      {{ owner.me ? 'Me' : owner.displayName }}
                  </div>
              </td>
              <td>{{ file.modifiedTime }}</td>
              <td>{{ file.size + ' ' + file.sizeExt }}</td>
              <td class="shared-width">
                <b-img v-for="(share,i) in file.permissions" :key="i"
                  rounded="circle"
                  :src="share.photoLink"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal id="share-modal" class="share-modal" v-model="showModal" centered>
      <div>
        <h6 class="fw-600">Share Project</h6>
        <div class="document-link">
          <p class="fs-13 fw-600">Document Link</p>
          <b-input-group size="sm" class="mb-2">
            <b-form-input></b-form-input>
            <b-input-group-prepend is-text>
            <b-icon-back></b-icon-back>
            </b-input-group-prepend>
          </b-input-group>
        </div>
        <div class="search-recipient">
          <p class="fs-13 fw-600">Search Recipients</p>
          <div class=" d-flex gap-2">
            <b-form-input placeholder="Search for names or emails..."></b-form-input>
            <b-btn variant="primary">Share</b-btn>
          </div>
        </div>
        <div  class="recipient-options">
          <p class="fs-13 fw-600">Recipients</p>
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between">
              <div class="d-flex gap-2">
                <b-img class="img-size-30" rounded="circle" src="https://lh3.googleusercontent.com/a/AATXAJzMWOnYLEs5DFxS3pzirHMbjQv4Qhc5_S9C6fna=s96-c" alt="" /> 
                <div>
                  <p class="fs-12 fw-600">James Stewart</p>
                  <p class=" fc-gray fs-11 fw-600">James Stewart</p>
                </div>
              </div>
              <b-dropdown text="Can Edit">
                <b-dropdown-item href="#">Can Edit</b-dropdown-item>
                <b-dropdown-item href="#">Can View</b-dropdown-item>
                <b-dropdown-item href="#">Admin</b-dropdown-item>
              </b-dropdown>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between">
              <div class="d-flex gap-2">
                <b-img class="img-size-30" rounded="circle" src="https://lh3.googleusercontent.com/a/AATXAJzMWOnYLEs5DFxS3pzirHMbjQv4Qhc5_S9C6fna=s96-c" alt="" /> 
                <div>
                  <p class="fs-12 fw-600">Rachel Williams</p>
                  <p class=" fc-gray fs-11 fw-600">Rachel Williams</p>
                </div>
              </div>
              <b-dropdown text="Can View">
                <b-dropdown-item href="#">Can Edit</b-dropdown-item>
                <b-dropdown-item href="#">Can View</b-dropdown-item>
                <b-dropdown-item href="#">Admin</b-dropdown-item>
              </b-dropdown>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between">
              <div class="d-flex gap-2">
                <b-img class="img-size-30" rounded="circle" src="https://lh3.googleusercontent.com/a/AATXAJzMWOnYLEs5DFxS3pzirHMbjQv4Qhc5_S9C6fna=s96-c" alt="" /> 
                <div>
                  <p class="fs-12 fw-600">Tony Roberts</p>
                  <p class="fc-gray fs-11 fw-600">Tony Robers</p>
                </div>
              </div>
              <b-dropdown text="Admin">
                <b-dropdown-item href="#">Can Edit</b-dropdown-item>
                <b-dropdown-item href="#">Can View</b-dropdown-item>
                <b-dropdown-item href="#">Admin</b-dropdown-item>
              </b-dropdown>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <template #modal-footer>
        <div class="footer">
          <b-link class="cancel" @click="showModal=false">Cancel</b-link>
          <b-link @click="showModal=false">Done</b-link>
        </div>
      </template>
    </b-modal>
    <div class="right-section">

        <div class="file-storage-details">
          <h5>File Storage</h5>
          <div class="progressbar">
            <div class="progress mb-3">
              <div role="progressbar" class="progress-bar" aria-valuemin="0" :aria-valuemax="progressMaxVal" :aria-valuenow="progressVal" :style="progressWidth"></div>
            </div>
            <p>{{progressVal}} of {{progressMaxVal}} mb</p>
          </div>
        </div>

        <div class="file-summary">
            <div>
              <b-icon-file-earmark-medical-fill></b-icon-file-earmark-medical-fill>
              <div>
                Documents <div>12 MB</div>
              </div>
            </div>
            <div>
              <b-icon-camera-video-fill></b-icon-camera-video-fill>
              <div>
                Videos <div>12 MB</div>
              </div>
            </div>
            <div>              
              <b-icon-image-fill></b-icon-image-fill>
              <div>
                Images <div>12 MB</div>
              </div>
            </div>
            <div>
              <!-- <b-icon-folder-fill></b-icon-folder-fill> -->
              <div class="icon-folder">
                <b-img :src="require('@/assets/icons/v1/Sphyr-Icons_folder.png')"></b-img>
              </div>
              <div>
                Others <div>12 MB</div>
              </div>
            </div>
        </div>
        
        <div class="upload-files">
          <input type="file" id="dropzone-file" name="uploaded file here..." class="input-file" multiple accept="image/*">
          <div class="dropzone-wrapper">
            <div>
              <b-icon-card-image></b-icon-card-image>
            </div>
            <label for="dropzone-file" class="dropzone-label">Upload folder / files</label>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "StorageComponent",
  data() {
    return {
      progressVal:'25',
      progressMaxVal:'30',
      progressWidth:'width: 0%',
      file:null,
      showModal:false,
      showOptions:false,
      recentlyViewed:[
        {
          fileType: "file",
          fileName: "Project",
          fileSize: "20 MB",
        },
        {
          fileType: "video",
          fileName: "Project",
          fileSize: "20 MB",
        },
        {
          fileType: "file",
          fileName: "Project",
          fileSize: "20 MB",
        },
        {
          fileType: "image",
          fileName: "Project",
          fileSize: "20 MB",
        },
      ],
    };
  },
  mounted(){
    this.computeProgressWidth()
  },
  methods:{
    showOption(key){
      var element = document.getElementById('option-menu'+key);
      element.classList.add('display');
      console.log("element selected:::",element)
    },
    hideOption(key){
      var element = document.getElementById('option-menu'+key);
      element.classList.remove('display');
      console.log("element selected:::",element)
    },
    computeProgressWidth(){
      this.progressWidth = 'width:' +(this.progressVal / this.progressMaxVal) * 100 + '%';
      console.log("ProgressWidth::", this.progressWidth);
    }
  },
  computed:{
    ...mapGetters({files:'GET_STORAGE'})
  },
  watch:{
    files(){
      this.$store.commit("SET_LOADER",false);
    }
  }
};
</script>

<style lang="scss" scoped>
.storage-component {
  width: 100%;
  position: relative;
  gap: 20px;
}
.left-section{
  padding-top: 20px;
  width: 70%;
  margin: auto;
  .tabletable-bordered{ width: 100%; }
  p{margin-bottom:0}
  .card-body{ padding: 10px; }
  .card-text{
    p{ color: $gray; }
  }
}
.right-section{ 
  padding-top: 20px;
  width: 25%;
  height: 85vh;
  position: relative;
  border-left: 1px solid $light-gray;
  .file-storage-details{
    padding: 0 20px;
    .progressbar{
      p{ text-align: right; font-size: 12px; color: $gray; font-weight: 500;}
    }
  }
  .file-summary{
    width: 100%;
    border-top: 1px solid $light-gray;
    font-size: 16px;
    font-weight: 700;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    svg{
      width: 40px;
      height: 40px;
      padding: 12px;
      background-color: #fff;
    }
    .icon-folder{
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      >img {
        filter: invert(12%) sepia(69%) saturate(79) hue-rotate(348deg) brightness(86%) contrast(81%);
        width: 16px;
        }
    }
    >div{
      display: flex;
      gap: 20px;
    }
    >div > div >div{ font-size: 13px; font-weight: 500; color: $gray; }
  }
  .upload-files{
    padding: 0 20px;
    .dropzone-wrapper{
      width: 100%;
      height: 220px;
      border: 1px solid $light-gray;
      border-radius: 5px;
      text-align: center;
      padding: 35px;
      label{ color: $gray; font-size: 12px; }
    }
  }
}
p {margin: 0;}
.bi-file-earmark-medical-fill {
  color: $dark-blue;
}
.bi-camera-video-fill {
  color: $yellow;
}
.bi-image-fill {
  color: $green;
}
.bi-folder-fill{
  color: $bright-red;
}
.bi-card-image{
  color: $light-gray;
  width: 100px;
  height: 100px;
}
.files-list {
  max-height: 48vh;
}
table {
  border-collapse: separate;
  border-spacing: 0 15px;
}
td {
  @extend .fs-14;
}
th,
td {
  text-align: left;
  border-bottom: 1px solid $light-gray;
  padding: 10px;
  img {
    width: 50px;
    height: 50px;
  }
}

.shared-width{
  img{
    width: 37px;
    height: 37px;
  }
}
.storage-navbar,
th {
  position: sticky;
  position: -webkit-sticky;
  background-color: $background-color;
  top: 0;
}
.storage-navbar {z-index: 3; padding-top: 20px;}
th {
  z-index: 2;
  @extend .gray-small-text;
}
.progress-bar{
  @extend .gradient-blue-bg-color;
}

 .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
  .card-body > div{ 
    gap:10px;
    > span{ color: $gray; }
  }
  .elipsis{
    color: $gray;
    visibility: hidden;
    cursor: pointer;
  }
  tr:hover{
    .elipsis{
      visibility: visible;
    }
  }
  .w-3{ width: 3%; }
  .w-6{ width: 6%; }

  .option{
    position: relative;
    .file-options{
      box-shadow: 2px 2px 8px #00000029 !important;
      z-index: 1;
      display: none;
      width: 105px;
      position: absolute;
      background-color: #fff;
      border-radius: 5px;
      .list-group-item{
        border: none;
        cursor: pointer;
        margin: 1px  3px;
        border-radius: 5px;
        text-align: center;
        padding: 6px;
        font-size: 11px;
        font-weight: 700;
      }
  }
    .list-group-item:hover{
      background-color: $lighter-gray;
    }
    hr{ margin: 1px 0;color: $gray;  }
  }
  .display{
    display:block !important;
  }
  .img-size-30{
    width: 36px;
    height: 36px;
  }
  
</style>
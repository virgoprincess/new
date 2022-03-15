<template>
  <div id="login-page">

     <div class="login-section">
         <b-img :src="require('@/assets/images/sphyr-logo.png')"></b-img>
         
         <div class="login-form">
            <h2>Sign up</h2>
            <b-form>
                <b-form-group  
                label="Name"
                label-for="frm-name"
                >
                    <b-form-input
                    id="frm-name"
                    placeholder="Name"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group  
                label="Email"
                label-for="frm-email"
                >
                    <b-form-input
                    type="email"
                    id="frm-email"
                    placeholder="Email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group  
                label="Password"
                label-for="frm-password"
                >
                    <b-form-input
                    type="password"
                    id="frm-password"
                    placeholder="Password"
                    autocomplete="on"
                    required
                    ></b-form-input>
                </b-form-group>

                 <b-form-group  
                label="Re-Enter Password"
                label-for="frm-repassword"
                >
                    <b-form-input
                    type="password"
                    id="frm-repassword"
                    placeholder="Password"
                    autocomplete="off"
                    required
                    ></b-form-input>
                </b-form-group>
                 
                <b-button class="btn-create-account">Create Account</b-button>
                <b-button-group>
                    <b-button @click="login" class="btn-sign-up-google"><b-img :src="require('@/assets/images/google-logo.svg')"></b-img> Sign up with Google</b-button>
                </b-button-group>

                <div class="fs-12 fw-700">Already have an account? <span><b-link @click="login">Log In</b-link></span></div>
            </b-form>
         </div>
         
         <div class="email">
             <b-link class="fs-11 fw-600"  href="mailto:help@sphyr.com"><b-icon-envelope></b-icon-envelope>help@sphyr.com</b-link>
         </div>
     </div>
     <div class="image-section">
     </div>
  </div>
</template>

<script>
export default {
    name:'LoginComponent',
    methods:{
        async login(){
            try {
                const googleUser = await this.$gAuth.signIn();
                this.isSignIn = this.$gAuth.isAuthorized;

                if(this.isSignIn) this.$router.push({name:'home'}); 
                console.log("Is Signed In? :::",this.isSignIn);
                console.log("googleUser",googleUser);
            }catch (error) {
                console.log("Not logged in::");
            }
        },
    }
}
</script>

<style lang="scss" scoped>
#login-page{
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    .login-section,.image-section{
        width: 50%;
        padding: 20px;
    }
    .image-section{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('@/assets/images/login-right-image.png');

    }
    .login-form{
        width: 45%;
        margin: auto;

    }
    h2{
        padding: 50px 0 20px 0;
    }
    .form-group{
        font-size: 14px !important;
        font-weight: 800;
        margin-bottom: 10px;
        input{
            border-color: $lighter-gray !important;
        }
    }
    ::placeholder{
        font-size: 14px;
        color:$gray;
        font-style: italic;
    }
    .btn-create-account{
        margin-top: 40px;
        padding: 12px;
        border: none;
        background: rgb(21,204,174);
        background: -moz-linear-gradient(266deg, rgba(21,204,174,1) 0%, rgba(88,215,148,1) 100%);
        background: -webkit-linear-gradient(266deg, rgba(21,204,174,1) 0%, rgba(88,215,148,1) 100%);
        background: linear-gradient(266deg, rgba(21,204,174,1) 0%, rgba(88,215,148,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#15ccae",endColorstr="#58d794",GradientType=1);
    }
    .btn-sign-up-google{
        line-height: 20px;
        padding: 0;
        border: 2px solid $lighter-gray;
        color: $dark-gray;
        background-color: transparent;
        img{ width: 45px; }
    }
    button,.btn-group{
        font-weight: 500;
        width: 100%;
        font-size: 14px;
        margin: 5px 0;
    }
    button, input{
        border-radius: 5px;
    }
    .email{
        margin: 60px 50px 0;
        text-align: right;
    }
    span a{ color: $bright-green; }
    a{ text-decoration: none; color: $black; }
}
</style>   
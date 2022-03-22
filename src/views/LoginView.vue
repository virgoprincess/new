<template>
  <div id="login-page">

     <div class="login-section">
         <b-img :src="require('@/assets/images/sphyr-logo.png')"></b-img>
         
         <div class="login-form">
            <h2>Sign up</h2>
            <b-form>
                <b-form-group  
                label="Name"
                label-for="input-name"
                >
                    <b-form-input
                    id="frm-name"
                    name="input-name"
                    v-model="$v.user.name.$model"
                    :state="validateState('name')"
                    placeholder="Name"
                    aria-describedby="name-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback
                        id="name-live-feedback">
                        {{!$v.user.name.required? "Please provide a name":""}} <br>
                        {{!$v.user.name.alpha ? "Please provide a valid name. Field must not contain numbers or special characters": ""}}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group  
                label="Email"
                label-for="input-email"
                >
                    <b-form-input
                    type="email"
                    id="input-email"
                    name="input-email"
                    placeholder="Email"
                    v-model="$v.user.email.$model"
                    :state="validateState('email')"
                    aria-describedby="email-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback
                        id="email-live-feedback">
                        {{!$v.user.email.required? "Please enter your email address":""}} <br>
                        {{!$v.user.email.email? "Please enter your email address in format: yourname@example.com": ""}}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group  
                label="Password"
                label-for="input-password"
                >
                    <b-form-input
                    type="password"
                    id="input-password"
                    name="input-password"
                    placeholder="Password"
                    autocomplete="off"
                    v-model="$v.user.password.$model"
                    :state="validateState('password')"
                    aria-describedby="password-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback
                        id="password-live-feedback" v-if="!$v.user.password.required">
                        {{!$v.user.password.required? "Please provide a password":""}}
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                        id="password-live-feedback" v-if="!$v.user.password.minLength">
                        {{!$v.user.password.minLenght? "Use at least 8 characters":""}}
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                        id="password-live-feedback"
                        v-if="!$v.user.password.containsUppercase || !$v.user.password.containsLowercase || !$v.user.password.containsNumber || !$v.user.password.containsSpecial">
                            Password must have upper and lowercase characters <br/>
                            1 or more numbers <br>
                            At least 1 special character <br>
                    </b-form-invalid-feedback>
                </b-form-group>

                 <b-form-group  
                label="Re-Enter Password"
                label-for="input-repassword"
                >
                    <b-form-input
                    type="password"
                    id="input-repassword"
                    name="input-repassword"
                    v-model="$v.user.repassword.$model"
                    :state="validateState('repassword')"
                    aria-describedby="repassword-live-feedback"
                    placeholder="Password"
                    autocomplete="off"
                    required
                    ></b-form-input>
                    <b-form-invalid-feedback
                        id="repassword-live-feedback">
                        {{!$v.user.repassword.required? "Please re-enter your password":""}}
                        {{!$v.user.repassword.sameAsPassword? "Entered password did not match":""}}
                    </b-form-invalid-feedback>
                </b-form-group>
                 
                <b-button class="btn-create-account" @click.stop.prevent="onSubmit">Create Account</b-button>
                <b-button-group>
                    <b-button class="btn-sign-up-google" @click="login"><b-img :src="require('@/assets/images/google-logo.svg')"></b-img> Sign up with Google</b-button>
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
import { validationMixin } from "vuelidate";
import { alpha,alphaNum, required, minLength,email, sameAs } from "vuelidate/lib/validators";
export default {
    name:'LoginComponent',
    data(){
        return{
            userProfile:[],
            user:{
                name:null,
                email:null,
                password:null,
                repassword:null,
            },
        }
    },
    mixins:[validationMixin],
    validations:{
        user:{
            name:{ required},
            email:{ required ,email},
            password:{ required, minLength: minLength(8),
                    containsUppercase:function(value){ return /[A-Z]/.test(value) },
                    containsLowercase:function(value){ return /[a-z]/.test(value) },
                    containsNumber:function(value){ return /[0-9]/.test(value) },
                    containsSpecial:function(value){ return /[#?!@$%^&*-_]/.test(value) },
                     },
            repassword:{ required, sameAsPassword: sameAs("password") },
        }
    },
    methods:{
        validateState(name){
            const { $dirty, $error } = this.$v.user[name];
            return $dirty ? !$error : null;
        },
        resetForm(){
            this.user = {
                name: null,
                email: null,
                password:null,
                repassword:null,
            },
            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit(e){
            this.$v.user.$touch();
            if (this.$v.user.$anyError){
                return;
            }
            const profileInfo = {
                name:this.user.name,
                email:this.user.email,
                imageUrl:'/img/man.4057928f.jpg',
                password:this.user.password,
                repassword:this.user.repassword,
                newUser:true,
            };
            this.$store.commit("SETUSER_ACCOUNT",profileInfo);
            this.$router.push({name:'home'}); 
        },
        async login(){
            try {
                this.$store.commit("SET_LOADER",true);
                const googleUser = await this.$gAuth.signIn();
                this.isSignIn = this.$gAuth.isAuthorized;   
                /* const access_token = googleUser.getAuthResponse(true).access_token;
                const basicProfile = googleUser.getBasicProfile(); */
                this.$store.commit("SET_USER_ID",googleUser.getBasicProfile().getEmail());
                this.$store.commit("SET_ACCESS_TOKEN",googleUser.getAuthResponse(true).access_token);
                if(this.isSignIn && googleUser.getAuthResponse(true).access_token) {
                    googleUser.newUser = false;
                    this.$store.dispatch("SETUSER_ACCOUNT",googleUser);
                    this.$router.push({name:'home'}); 
                }else{
                    this.$store.commit("SET_LOADER",false);
                }
            }catch (error) {
                console.log("Not logged in::",error);
                this.$store.commit("SET_LOADER",false);
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
        color:#fff !important;
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
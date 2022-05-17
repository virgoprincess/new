<template>
  <div id="login-page">

     <div class="login-section scrollable">
         <b-img class="login-logo" :src="require('@/assets/images/sphyr-01.svg')"></b-img>
         
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
                    <b-button class="btn-sign-up-google" @click="login"><b-img :src="require('@/assets/images/google-logo.svg')"></b-img> Login with Google</b-button>
                </b-button-group>
                <a class="slack-btn" href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fvirgoprincess.github.io&amp;client_id=3208850616742.3469803502515" style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:18px;font-weight:600;height:56px;justify-content:center;text-decoration:none;width:296px"><svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;margin-right:12px" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg>Sign in with Slack</a>
                <!-- <a class="slack-btn" href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8080&amp;client_id=3208850616742.3469803502515" style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:18px;font-weight:600;height:56px;justify-content:center;text-decoration:none;width:296px"><svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;margin-right:12px" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg>Login with Slack</a> -->
                <div class="fs-12 fw-700">Already have an account? <span><b-link @click="login">Log In</b-link></span></div>
            </b-form>
         </div>
         
         <div class="email">
             <b-link class="fs-11 fw-600"  href="mailto:help@sphyr.com"><b-icon-envelope></b-icon-envelope>help@sphyr.com</b-link>
         </div>
     </div>
     <div class="image-section">
     </div>
     <b-modal id="signup-modal" class="signup-modal" v-model="showModal">
         <div class="signup-options" v-if="!isSkip && !syncEmail">
             <h4>Continue using:</h4>
             <b-button-group>
                    <b-button class="btn-sign-up-google" @click="login"><b-img :src="require('@/assets/images/google-logo.svg')"></b-img> Continue with Google</b-button>
             </b-button-group>
             <a class="slack-btn" href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fvirgoprincess.github.io&amp;client_id=3208850616742.3469803502515" style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:18px;font-weight:600;height:56px;justify-content:center;text-decoration:none;width:296px"><svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;margin-right:12px" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg>Sign in with Slack</a>
             <!-- <a class="slack-btn" href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8080&amp;client_id=3208850616742.3469803502515" style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:18px;font-weight:600;height:56px;justify-content:center;text-decoration:none;width:296px"><svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;margin-right:12px" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg>Continue with Slack</a> -->
            <div class="d-flex justify-content-between">
                <b-link @click="syncEmail = true;isSkip = false">Sync Email?</b-link>
                <b-link @click="isSkip = true;syncEmail = false">Skip</b-link>
            </div>
         </div>
         <div v-if="isSkip">
             <h6>We have sent a verification link to your email. Please confirm to verify your account.</h6>
         </div>
         <div class="register-email-form" v-if="syncEmail">
             <h5>Sync Email</h5>
             <b-container fluid>
                 <b-row>
                     <b-col>
                         <label for="">Email:</label>
                     </b-col>
                     <b-col cols="9">
                         <b-form-input type="email" placeholder="john_doe123@gmail.com" :value="user.email"></b-form-input>
                     </b-col>
                 </b-row>

                 <b-row>
                     <b-col cols="3">
                         <label for="">Password:</label>
                     </b-col>
                     <b-col cols="9">
                         <b-form-input type="password"></b-form-input>
                     </b-col>
                 </b-row>

                 <b-row>
                     <b-col>
                         <label for="">Host:</label>
                     </b-col>
                     <b-col cols="9">
                         <b-form-input type="text" placeholder="imap.gmail.com"></b-form-input>
                     </b-col>
                 </b-row>

                 <b-row>
                     <b-col>
                         <label for="">Port:</label>
                     </b-col>
                     <b-col cols="9">
                         <b-form-input type="number" placeholder="993"></b-form-input>
                     </b-col>
                 </b-row>

                 <b-row>
                     <b-col>
                         <label for="">TLS:</label>
                     </b-col>
                     <b-col cols="9">
                         <b-form-select v-model="selectedTLS" :options="[{value:true,text:'true'},{value:false,text:'false'}]"></b-form-select>
                     </b-col>
                 </b-row>
             </b-container>
         </div>
         <template #modal-footer>
             <div class="footer">
                <b-link class="cancel" @click="showModal=false">Cancel</b-link>
                <b-link @click="verify">Done</b-link>
             </div>
         </template>
     </b-modal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { alpha,alphaNum, required, minLength,email, sameAs } from "vuelidate/lib/validators";
import { accountType } from '../utils/enum'
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
            showModal:false,
            isSkip:false,
            selectedTLS:true,
            syncEmail:false,
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
    /* created(){
       console.log("Access Token Login:::",localStorage.getItem('accessToken'));
    }, */
    methods:{
        /* loginSlack(){
            this.$store.dispatch("LOGIN_SLACK") 
        }, */
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
            
            /* newUserInfo = {
                name:this.user.name,
                email:this.user.email,
                imageUrl:'/img/man.4057928f.jpg',
                password:this.user.password,
                repassword:this.user.repassword,
                newUser:true,
            }; */
            this.showModal = true;
            this.isSkip = false;
            this.syncEmail = false;
        },
        verify(){
            this.showModal=false;
            console.log("verified")
            this.user.imageUrl = '/img/man.4057928f.jpg';
            this.$store.commit("SETUSER_ACCOUNT",this.user);
            this.$router.push({name:'home'}); 
        },
        async login(){
            try {
                this.$store.commit("SET_LOADER",true);
                const googleUser = await this.$gAuth.signIn();
                this.isSignIn = this.$gAuth.isAuthorized;   
                localStorage.setItem('isSignIn',this.signIn)
                
                this.$store.commit("SET_USER_ID",googleUser.getBasicProfile().getEmail());
                this.$store.commit("SET_ACCESS_TOKEN",googleUser.getAuthResponse(true).access_token);

                localStorage.userId = googleUser.getBasicProfile().getEmail();
                localStorage.accessToken = googleUser.getAuthResponse(true).access_token;

                if(this.isSignIn && googleUser.getAuthResponse(true).access_token) {
                    googleUser.newUser = false;
                    googleUser.accountType = accountType.GOOGLE;
                    this.$store.dispatch("SETUSER_ACCOUNT",googleUser);
                    localStorage.userProfile = JSON.stringify(this.$store.state.userProfile);
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
    .login-logo{
        width: 100px;
        height: 61px;
    }
    .login-section,.image-section{
        width: 50%;
        padding: 20px;
        height: 101vh;
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
        margin: 0 50px 0;
        text-align: right;
    }
    span a{ color: $bright-green; }
    a{ text-decoration: none; color: $black; }
    .slack-btn{ width: 100% !important; }
}
</style>   
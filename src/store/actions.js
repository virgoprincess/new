import axios from 'axios';
import * as config from './config'
import * as helpers from './helpers'
import {accountType} from '../utils/enum'

export default{
      SET_CURRENTMENU(state,payload){
        state.commit("SET_CURRENTMENU",payload);
    },
    SETUSER_ACCOUNT(state,payload){
      var profileInfo;
      if( payload !=  null ){
        if(payload.accountType === accountType.GOOGLE)
        {
          profileInfo = {
            name: payload.getBasicProfile().getName(),
            imageUrl: payload.getBasicProfile().getImageUrl(),
            email: payload.getBasicProfile().getEmail(),
            newUser:payload.newUser,
            accountType : payload.accountType,
          };
        }else if( payload.accountType === accountType.SLACK ){
          profileInfo = payload;
        }
        else{
          payload.accountType = accountType.NEWUSER;
          profileInfo = payload;
        }
      }else{
        state.commit("SET_RESET");
      }
      state.commit("SETUSER_ACCOUNT",profileInfo);
      if(payload != null && payload.accountType === accountType.GOOGLE) state.dispatch("SET_CONTACTS");
      state.commit("SET_LOADER",false);
    },
    async LOGIN_SLACK(context){
      const bodyFormData = new FormData();
      /* return await axios.post(`https://slack.com/api/oauth.v2.access?code=${context.state.slackCode}&redirect_uri=https://localhost:8080&client_id=3208850616742.3469803502515&client_secret=a0d2c07019e101885efb3701b354211c`).then( async res =>{ */
      return await axios.post(`https://slack.com/api/oauth.v2.access?code=${context.state.slackCode}&redirect_uri=https://virgoprincess.github.io&client_id=3208850616742.3469803502515&client_secret=a0d2c07019e101885efb3701b354211c`).then( async res =>{
        let token = res.data.authed_user.access_token;
        bodyFormData.append("token",token);
        bodyFormData.append("user",res.data.authed_user.id);

        return await axios.post(`https://slack.com/api/users.info`,
        bodyFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }).then( r =>{
          let profile = r.data.user.profile;
          let payload = {
            accountType : accountType.SLACK,
            name : profile.display_name,
            imageUrl : profile.image_original,
            email : profile.email,
            newUser : false,
          }
          localStorage.userId = profile.email;
          localStorage.accessToken = token;
          localStorage.isSignIn = true;

          return payload;
          /* context.dispatch("SETUSER_ACCOUNT",payload) */
        })
      })
    },
    SET_DASHBOARD(state,payload){
      console.log("Dashboard is called::::")
        payload = [
                {
                messages:{
                    type:"1",
                    id:"ME01",
                    time:"10:52 AM",
                    profileInfo:{ firstName:"Michael", lastName:"Williams",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/f21ce49c84cbcc1afa4c408d997c1949?s=400&d=robohash&r=x" },
                    messageContent:{
                        subject:"Scheduling a call with new lead",
                        message:"Hi there, this is Liam from SparksServices, I saw you signed up for a free trial on our site"
                        },
                    attachments:[
                        {fileType:"image",fileUrl:'/images/image-file.jpg',fileName:"Sample.jpg"},
                        {fileType:"image",fileUrl:'/images/image-file-2.jpg',fileName:"Sample.jpg"},
                        {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Literature.pdf",fileSize:"100 MB"},
                    ]
                }
            },
            {
                messages:{
                    type:"2",
                    id:"ME02",
                    time:"10:52 AM",
                    profileInfo:{ firstName:"John", lastName:"Scott",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/f5c3451ebd1abd59a67ad3b41b90b796?s=400&d=robohash&r=x" },
                    messageContent:{
                        subject:"Following up with a lead who requests a price quote",
                        message:"Hi, thanks for inquiring about our pricing. We would be happy to offer you an estimate. How many full-time and part-time eployees does your company have?"
                        },
                    attachments:[
                        {fileType:"image",fileUrl:'/images/image-file-3.jpg',firstName:"Sample.jpg"},
                        {fileType:"image",fileUrl:'/images/image-file.jpg',firstName:"Sample.jpg"},
                        {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Design.pdf",fileSize:"11 MB"},
                        {fileType:"image",fileUrl:'/images/image-file-2.jpg',firstName:"Sample.jpg"},
                    ]
                }
            },
            {
                messages:{
                    type:"1",
                    id:"ME03",
                    time:"10:52 AM",
                    profileInfo:{ firstName:"Hillary", lastName:"Wilson",jobTitle:"Executive", profileImage:"https://avatars.dicebear.com/v2/female/04ffc0c2338bad4bdb2e8661625ce1cc.svg" },
                    messageContent:{
                        subject:"Thank you text after an initial call",
                        message:"Hi Joe, thank you for taking the time for a call today. We’re excited to take next steps with you on your home renovation, we’ll check back in a few days once you’ve had some time to crunch the numbers. I also sent you a copy of the proposal presented last week through email. Please let me know if you have questions. Thanks!"
                        },
                    attachments:[
                        {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:'Mockup.pdf',fileSize:"200 MB"},
                        {fileType:"image",fileUrl:'/images/image-file-2.jpg',firstName:"Sample.jpg"},
                    ]
                }
            },
            {
                messages:{
                    type:"2",
                    id:"ME04",
                    time:"10:52 AM",
                    profileInfo:{ firstName:"Robert", lastName:"Patt",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/04ffc0c2338bad4bdb2e8661625ce1cc?s=400&d=robohash&r=x" },
                    messageContent:{
                        subject:"Sending updates through the sales process",
                        message:"Hi Dylan, we have an update on your custom car order! The interior has been installed and looks 🔥. Next up is the new paint, we’re looking at 4 weeks until all is done and dusted!"
                        },
                    attachments:[
                        {fileType:"image",fileUrl:'/images/image-file.jpg',firstName:"Sample.jpg"},
                        {fileType:"image",fileUrl:'/images/image-file-3.jpg',firstName:"Sample.jpg"},
                        {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Letters.pdf",fileSize:"60 MB"},
                    ]
                }
            },
            
        ];
        state.commit("SET_DASHBOARD",payload);
        state.commit("SET_LOADER",false);
    },
    SET_MESSAGES(state, payload){
        payload = [{
            "pinned":"false",
            "members": [
                {"profileInfo":{ "firstName":"Zachary", "lastName":"Lane","jobTitle":"Executive", "profileImage":"https://robohash.org/cee65dad0c389543043df183a2e09a9e?set=set4&bgset=&size=400x400" }},
                {"profileInfo":{ "firstName":"Scarlett", "lastName":"Eleanor","jobTitle":"Secretary", "profileImage":"https://robohash.org/9b67c2903c042ae5ff8edc380091f4c8?set=set4&bgset=&size=400x400" }},
                {"profileInfo":{ "firstName":"Madison", "lastName":"Layla","jobTitle":"Sales Rep", "profileImage":"https://gravatar.com/avatar/849a653e8b8551d7c9679b39cb237693?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Penelope", "lastName":"Riley","jobTitle":"Producer", "profileImage":"https://avatars.dicebear.com/v2/female/2bbe8d47ecdaed297aedb81c020d801b.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Zachary Lane",
                "timestamp_ms": 1579137191303,
                "content": "Hi, Hannah. It’s Martha from Better Sleep Solutions. How is the new mattress treating you?",
                "type": "Generic"
              },
              {
                "sender_name": "Scarlett Eleanor",
                "timestamp_ms": 1579137103044,
                "content": "My first girlfriend turned into the moon",
                "type": "Generic"
              },
              {
                "sender_name": "Zuko",
                "timestamp_ms": 1579137078312,
                "content": "Everyone in the Fire Nation thinks I'm a traitor, I couldn't drag her into it.",
                "type": "Generic"
              },
              {
                "sender_name": "Zuko",
                "timestamp_ms": 1579136858575,
                "content": "Yeah",
                "type": "Generic"
              },
              {
                "sender_name": "Sokka",
                "timestamp_ms": 1579136847743,
                "content": "That gloomy girl who sighs a lot?!",
                "type": "Generic"
              },
              {
                "sender_name": "Zuko",
                "timestamp_ms": 1579136839127,
                "content": "Well, I did have a girlfriend. Mai.",
                "type": "Generic"
              },
              {
                "sender_name": "Sokka",
                "timestamp_ms": 1579136837474,
                "content": "Really? You didn't leave behind anyone you cared about?",
                "type": "Generic"
              },
              {
                "sender_name": "Zuko",
                "timestamp_ms": 1579136836700,
                "content": "It wasn't that hard",
                "type": "Generic"
              },
              {
                "sender_name": "Sokka",
                "timestamp_ms": 1579136824886,
                "content": "I think your uncle would be proud of you, leaving your home to come help us -- that's hard",
                "type": "Generic"
              }
            ],
          },
          {
            "pinned":"true",
            "profileInfo":{ "firstName":"Liam", "lastName":"Carl","jobTitle":"Executive", "profileImage":"https://avatars.dicebear.com/v2/female/68a0e0d6738abe514ed49fb17a63a66e.svg" },
            "members": [
                {"profileInfo":{ "firstName":"Liam", "lastName":"Carl","jobTitle":"Executive", "profileImage":"https://gravatar.com/avatar/600288a6bb91f369f7b88fb523656d0b?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://gravatar.com/avatar/c2d174b8da3827082bc195bae378dff2?s=400&d=robohash&r=x" }},
            ],
            "messages": [
              {
                "sender_name": "Liam Carl",
                "timestamp_ms": 1579137191303,
                "content": "You’re almost done buying your new mattress and getting the best sleep of your life! Remember to enter your payment info to select a delivery date http://sleepcushy.com/",
                "type": "Generic"
              },
              {
                "sender_name": "Liam Carl",
                "timestamp_ms": 1579137103044,
                "content": "My first girlfriend turned into the moon",
                "type": "Generic"
              },
              {
                "sender_name": "Justin Mark",
                "timestamp_ms": 1579137078312,
                "content": "Everyone in the Fire Nation thinks I'm a traitor, I couldn't drag her into it.",
                "type": "Generic"
              },
              {
                "sender_name": "Justin Mark",
                "timestamp_ms": 1579136858575,
                "content": "Yeah",
                "type": "Generic"
              },
              {
                "sender_name": "Liam Carl",
                "timestamp_ms": 1579136847743,
                "content": "That gloomy girl who sighs a lot?!",
                "type": "Generic"
              },
              {
                "sender_name": "Liam Carl",
                "timestamp_ms": 1579136839127,
                "content": "Well, I did have a girlfriend. Mai.",
                "type": "Generic"
              },
              {
                "sender_name": "Liam Carl",
                "timestamp_ms": 1579136837474,
                "content": "Really? You didn't leave behind anyone you cared about?",
                "type": "Generic"
              },
              {
                "sender_name": "Justin Mark",
                "timestamp_ms": 1579136836700,
                "content": "It wasn't that hard",
                "type": "Generic"
              },
              {
                "sender_name": "Justin Mark",
                "timestamp_ms": 1579136824886,
                "content": "I think your uncle would be proud of you, leaving your home to come help us -- that's hard",
                "type": "Generic"
              }
            ],
          },
          {
            "pinned":"true",
            "profileInfo":{ "firstName":"Amelia", "lastName":"Isabella","jobTitle":"Executive", "profileImage":"https://gravatar.com/avatar/5fd8d8f167399c85d50e0dfbbe80ebba?s=400&d=robohash&r=x" },
            "members": [
                {"profileInfo":{ "firstName":"Amelia", "lastName":"Isabella","jobTitle":"Writer", "profileImage":"https://avatars.dicebear.com/v2/female/3c54033dc2d2b9032e19609d0b8fd74b.svg" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/c2d174b8da3827082bc195bae378dff2.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Amelia Isabella",
                "timestamp_ms": 1579137191303,
                "content": "Happy Monday Laura! I have good news, the shoes you inquired about are back in stock in your size. I set a pair aside for you to come pick up this week. ",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Evelyn", "lastName":"Harper","jobTitle":"Executive", "profileImage":"https://gravatar.com/avatar/5073fe03e8b1255eca3a1e28f3625239?s=400&d=robohash&r=x" },
            "members": [
                {"profileInfo":{ "firstName":"Evelyn", "lastName":"Harper","jobTitle":"Writer", "profileImage":"https://gravatar.com/avatar/e911599449bb1ce4c28803092d489c32?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/8fa9b313ed3709475c2aa05cad064347.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Evelyn Harper",
                "timestamp_ms": 1579137191303,
                "content": "Hello Mike, we’re approaching the summer rush for barbecuing! Do you need to increase your wholesale order on propane for the coming months like usual?",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Luna", "lastName":"Ella","jobTitle":"Executive", "profileImage":"https://gravatar.com/avatar/c0b45af6ba08d691fb8585de58af9eae?s=400&d=robohash&r=x" },
            "members": [
                {"profileInfo":{ "firstName":"Luna", "lastName":"Ella","jobTitle":"Writer", "profileImage":"https://gravatar.com/avatar/77b33898e9c91b516a5629277f084a0e?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/https://robohash.org/54fbb31bc62cb61b78d4de5e5a416014?set=set4&bgset=&size=400x400.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Luna Ella",
                "timestamp_ms": 1579137191303,
                "content": "Hi Burt, will you be at the HomeTech convention this summer? We’d love to have you stop by our booth to update you on the latest smart thermostat innovation we’ve developed.",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Emily", "lastName":"Avery","jobTitle":"Executive", "profileImage":"https://robohash.org/c0b45af6ba08d691fb8585de58af9eae?set=set4&bgset=&size=400x400" },
            "members": [
                {"profileInfo":{ "firstName":"Emily", "lastName":"Avery","jobTitle":"Writer", "profileImage":"https://robohash.org/449e6a5d6bd6684b8ef799689a50deca?set=set4&bgset=&size=400x400" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/54fbb31bc62cb61b78d4de5e5a416014.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Mila Jones",
                "timestamp_ms": 1579137191303,
                "content": "Hi Carly, I found some two-bedroom apartments in your price range, but these have been going quick. Would you be able to see them tonight at 5 p.m.?",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Scarlett", "lastName":"Eleanor","jobTitle":"Executive", "profileImage":"https://robohash.org/03bbcb57f73493e84fe7f9bf49929110?set=set4&bgset=&size=400x400" },
            "members": [
                {"profileInfo":{ "firstName":"Scarlett", "lastName":"Eleanor","jobTitle":"Writer", "profileImage":"https://robohash.org/af955e2f8fa52a57600ff2dc016d0166?set=set4&bgset=&size=400x400" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://gravatar.com/avatar/54fbb31bc62cb61b78d4de5e5a416014?s=400&d=robohash&r=x" }},
            ],
            "messages": [
              {
                "sender_name": "Scarlett Eleanor",
                "timestamp_ms": 1579137191303,
                "content": "Thanks for contacting Harvey’s Sporting Goods! Our hours are Monday to Saturday 10 a.m. to 9 p.m. and Sundays 10 a.m. to 6 p.m. We’ll get back to you during business hours.",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Jones", "lastName":"Eleanor","jobTitle":"Executive", "profileImage":"https://gravatar.com/avatar/03bbcb57f73493e84fe7f9bf49929110?s=400&d=robohash&r=x" },
            "members": [
                {"profileInfo":{ "firstName":"Jones", "lastName":"Eleanor","jobTitle":"Writer", "profileImage":"https://avatars.dicebear.com/v2/female/75495a7f450a06e2ed2a56d884d97f5d.svg" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/cbed777cc9ba19d4090caeb5f216d0cf.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Aria Jones",
                "timestamp_ms": 1579137191303,
                "content": "Carefully add one drawer at a time, starting with the bottom drawer and working your way up",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Jones", "lastName":"Carl","jobTitle":"Executive", "profileImage":"https://avatars.dicebear.com/v2/female/03bbcb57f73493e84fe7f9bf49929110.svg" },
            "members": [
                {"profileInfo":{ "firstName":"Jones", "lastName":"Carl","jobTitle":"Writer", "profileImage":"https://gravatar.com/avatar/3d7b2d50cb616eca6d36120289c1cd54?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://avatars.dicebear.com/v2/female/3f5133082b9b3ddfc00fe9d295b53ab7.svg" }},
            ],
            "messages": [
              {
                "sender_name": "Hazel Zoey",
                "timestamp_ms": 1579137191303,
                "content": "We recommend avoiding using that product on real wood as wood requires special care. We have a real wood spray that we sell on our site: rosiesnaturalcare.com/products/reallywoody",
                "type": "Generic"
              },
            ]
        },
        {
            "pinned":"false",
            "profileInfo":{ "firstName":"Victoria", "lastName":"Lily","jobTitle":"Executive", "profileImage":"https://avatars.dicebear.com/v2/female/5fd8d8f167399c85d50e0dfbbe80ebba.svg" },
            "members": [
                {"profileInfo":{ "firstName":"Victoria", "lastName":"Lily","jobTitle":"Writer", "profileImage":"https://gravatar.com/avatar/3f5133082b9b3ddfc00fe9d295b53ab7?s=400&d=robohash&r=x" }},
                {"profileInfo":{ "firstName":"Justin", "lastName":"Mark","jobTitle":"Secretary", "profileImage":"https://gravatar.com/avatar/3f5133082b9b3ddfc00fe9d295b53ab7?s=400&d=robohash&r=x" }},
            ],
            "messages":[
              {
                "sender_name": "Aurora Violet",
                "timestamp_ms": 1579137191303,
                "content": "Hi, Stella. Mark here from Out of the Box Vending. I wanted to check in on your repair. Are you still experiencing issues with your office vending machine?",
                "type": "Generic"
              },
            ]
        },
        ];
        state.commit("SET_MESSAGES",payload);
        state.dispatch("SET_MESSAGE_THREADSBYID");
        /* state.commit("SET_LOADER",false); */
    },
    SET_MESSAGE_THREADSBYID(state,payload){
      var results = {
        "meta": {
          "page": 0,
          "page_size": 1,
          "first_page_url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages?Order=desc&PageSize=1&Page=0",
          "previous_page_url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages?Order=desc&PageSize=1&Page=0",
          "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages?Order=desc&PageSize=1&Page=0",
          "next_page_url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages?Order=desc&PageSize=1&Page=1&PageToken=PAIMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "key": "messages"
        },
        "messages": [
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC123",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Hi Jess, I can't make it today. I have so many things to do for my thesis.",
            "media": [
              {
                "sid": "MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "size": 42056,
                "content_type": "image/jpeg",
                "filename": "car.jpg"
              }
            ],
            "author": "Hannah Marquez",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlWo1DN8gOdNE5UMHgNT8IExJr6zkwxVQZC16sKqxqie35eWVBiYwv5POGNZYUo=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 9,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC124",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Oh! not a problem. We'll hang out next time.",
            "media": null,
            "author": "Jess Parker",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlxGW6ffJA-WIdIHBsom2v0LVtOTq6G-mH8Qb-t_RCeBIgTsb76btMqS2_TSSjD=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:37:57Z",
            "date_updated": "2022-03-24T20:37:57Z",
            "index": 0,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC123",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "By the way, I am on leave next Tuesday. If you're free, let's tatch up.",
            "media": null,
            "author": "Hannah Marquez",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlWo1DN8gOdNE5UMHgNT8IExJr6zkwxVQZC16sKqxqie35eWVBiYwv5POGNZYUo=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 5,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC124",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Oh cool! Yeah, That would be great. I'm free next week <3",
            "media": [
              {
                "sid": "MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "size": 42056,
                "content_type": "image/jpeg",
                "filename": "car.jpg"
              }
            ],
            "author": "Jess Parker",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlxGW6ffJA-WIdIHBsom2v0LVtOTq6G-mH8Qb-t_RCeBIgTsb76btMqS2_TSSjD=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 9,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC123",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Can't wait to see you. brb have a call from a client.",
            "media": [
              {
                "sid": "MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "size": 42056,
                "content_type": "image/jpeg",
                "filename": "car.jpg"
              }
            ],
            "author": "Hannah Marquez",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlWo1DN8gOdNE5UMHgNT8IExJr6zkwxVQZC16sKqxqie35eWVBiYwv5POGNZYUo=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 9,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC124",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Okay!",
            "media": null,
            "author": "Jess Parker",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlxGW6ffJA-WIdIHBsom2v0LVtOTq6G-mH8Qb-t_RCeBIgTsb76btMqS2_TSSjD=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:37:57Z",
            "date_updated": "2022-03-24T20:37:57Z",
            "index": 0,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC123",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Hey! Leslie will be coming home tomorrow. ",
            "media": null,
            "author": "Hannah Marquez",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlWo1DN8gOdNE5UMHgNT8IExJr6zkwxVQZC16sKqxqie35eWVBiYwv5POGNZYUo=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 5,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC124",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Really? That's good news!",
            "media": [
              {
                "sid": "MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "size": 42056,
                "content_type": "image/jpeg",
                "filename": "car.jpg"
              }
            ],
            "author": "Jess Parker",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlxGW6ffJA-WIdIHBsom2v0LVtOTq6G-mH8Qb-t_RCeBIgTsb76btMqS2_TSSjD=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 9,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          }
          ,
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC123",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "It's been 6 years since the last time I saw her.",
            "media": null,
            "author": "Hannah Marquez",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlWo1DN8gOdNE5UMHgNT8IExJr6zkwxVQZC16sKqxqie35eWVBiYwv5POGNZYUo=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 5,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
          {
            "sid": "IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "account_sid": "AC124",
            "conversation_sid": "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "body": "Me, either. She's married now right? I miss you guys so much.",
            "media": [
              {
                "sid": "MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "size": 42056,
                "content_type": "image/jpeg",
                "filename": "car.jpg"
              }
            ],
            "author": "Jess Parker",
            "participant_sid": "MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "photoUrl":'https://lh3.googleusercontent.com/cm/ABXenNlxGW6ffJA-WIdIHBsom2v0LVtOTq6G-mH8Qb-t_RCeBIgTsb76btMqS2_TSSjD=s100',
            "attributes": {
              "importance": "high"
            },
            "date_created": "2022-03-24T20:38:21Z",
            "date_updated": "2022-03-24T20:38:21Z",
            "index": 9,
            "delivery": {
              "total": 2,
              "sent": "all",
              "delivered": "some",
              "read": "some",
              "failed": "none",
              "undelivered": "none"
            },
            "url": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "links": {
              "delivery_receipts": "https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Receipts"
            }
          },
        ]
      }
      state.commit('SET_MESSAGE_THREADSBYID',results);
    },
    async SET_EMAILS(context){
      if( !context.state.userProfile.newUser )
      {
        await axios.get(`https://www.googleapis.com/gmail/v1/users/${context.state.userId}/messages`,{
        headers:config.getHeaders(context),
        params:{
          labelIds:'INBOX',
          q:'[ in:inbox -category:{Social Promotions} ]',
          maxResults:20
        }
      })
        .then((response)=>{
          context.dispatch("GET_MESSAGEBYID",response)
        });
      }
    },
    async GET_MESSAGEBYID(context, payload){
      var messages = [];
      let ctr = payload.data.messages.length;
      payload.data.messages.forEach(async(email,i)=>{
        await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${context.state.userId}/messages/${email.id}`,
       {
         headers:config.getHeaders(context)
       }).then((response)=>{
         ctr--;
          var data = response.data.payload.headers
          var msgs = {};
           data.map((res)=>{
           if(res.name == 'Subject')
             msgs.subject = res.value.length > 15 ? res.value.slice(0,20) + '...' : res.value;
           if(res.name == 'Date')
             {
               var d =new Date(res.value);
               msgs.date = d.toLocaleDateString() + " " +d.toLocaleTimeString();
             }
           if(res.name == 'From'){
              msgs.from = res.value.split(/</)[0];
              msgs.email = res.value.split(/</)[1] ? res.value.split(/</)[1].replace(/>/,''):'';
           }
           if(res.name == 'To')
            msgs.to = res.value; 

            var result = [];
            if( context.state.contacts.all != undefined ){
              result = context.state.contacts.all.find(contact => msgs.email === contact.email);
            }
            /* var result = context.state.contacts.all != undefined ? context.state.contacts.all.find(contact => msgs.email === contact.email) : ''; */
            msgs.photoUrl = result != undefined ? result.photoUrl : '';
            });    
            msgs.snippet = response.data.snippet.length > 30 ? response.data.snippet.slice(0,30) + "..." : response.data.snippet ;
            msgs.threadId = response.data.threadId;
            /* var contacts = context.state.contacts;
            contacts.all.forEach(contact => {
                  if(contact.photos)
                  {

                  }
            }); */
            messages.push(msgs);
            if( ctr == 0 ){
              //sort
              messages.sort((a,b)=>{
                /* console.log("dates compared:::",new Date(b.date),"\nA date::",new Date(a.date)); */
                return new Date(b.date) - new Date(a.date);
              })

              //remove duplicates
              messages = Array.from(new Set(messages.map(message => message.threadId))).map(threadId => {
                      return messages.find(message => message.threadId === threadId)
                    }); 

              context.commit("SET_EMAILS",messages);  
              context.commit("SET_LOADER",false);
            }
         
         });
      });
    },
    async GET_THREADSBYID(context,payload){
      let threads = {};
        /* context.commit("SET_LOADER",true); */
        await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${context.state.userId}/threads/${payload.threadId}`,{
          headers:config.getHeaders(context)
        }).then((response)=>{
          console.log("Thread Info::",response.data)
          threads.hasAttachments = false;
          let newThreads = [];
          response.data.messages.forEach((message,i)=>{
            let thread={};
            message.payload.headers.forEach((content)=>{
              if(content.name == "Date") {
                let d =new Date(content.value);
                thread[content.name] = d.toLocaleDateString() + " " +d.toLocaleTimeString();
              }
              if(content.name == "From"){
                thread[content.name] = content.value.split(/</)[0];
                  thread.email = content.value.split(/</)[1];
              }
              if(content.name == 'Subject')
                thread[content.name] = content.value;
              
            });
             thread.snippet = message.snippet.length > 0 ? message.snippet.slice(0,70)+'...' : '';
/* var content = message.payload.parts ? decodeURIComponent(escape(atob(message.payload.parts[0].body.data.split(".")[1]))) : message.snippet; */
                let content = {};
                let attachments = [];
                let padding = '';
                let base64Content = '';
                let data = '';
              /* btoa(unescape(encodeURIComponent(s))) */
              /* decodeURIComponent(escape(atob(content))) */

              let contentData = [];
              if(message.payload.parts){
                  console.log("First Condition:::");
                    message.payload.parts.forEach((part)=>{
                      if( part.mimeType != 'text/plain' ){
                        
                        data = part.body.data ? part.body.data : part.parts ? part.parts[0].body.data : '';
                        if( data != undefined && data != '' ){
                          padding = '='.repeat((4 - data.length % 4) % 4);
                          base64Content = decodeURIComponent(escape((window.atob((data + padding).replace(/-/g, '+').replace(/_/g, '/')))));
                          contentData.push({"data":base64Content,"mimeType":part.mimeType});
                        }
                        else if( part.body.attachmentId ){
                          attachments.push({"attachmentId":part.body.attachmentId,"mimeType":part.mimeType,"filename":part.filename});
                          threads.hasAttachments = true;
                          threads.attachmentsAdded = false;
                     
                        }
                      }
                    });
                    content.contentData = contentData;
              } else {
                console.log("Second Condition:::");
                  data  = message.payload.body.data;
                  if( data != undefined ){
                    padding = '='.repeat((4 - data.length % 4) % 4);
                    base64Content = decodeURIComponent(escape(window.atob((data + padding).replace(/-/g, '+').replace(/_/g, '/'))));
                    /* console.log("data:::",message.payload.body) */
                    contentData.push({"data":base64Content,"mimeType":message.payload.body.mimeType});
                    content.contentData = contentData;
                  }else{
                    //do something here
                  }
              }
              content.attachments = attachments;
              thread.content = content;
              newThreads.push(thread);
          });
          threads.thread = newThreads;
          threads.threadId = payload.threadId;
          threads.subject = payload.subject;
          !threads.hasAttachments ? context.commit("SET_THREADBYID",threads) : context.dispatch("GET_ATTACHMENTS_DATA",threads);
        });
    },
    async GET_ATTACHMENTS_DATA(context,payload){
      let threads = JSON.parse(JSON.stringify(payload));
      let thCtr = threads.thread.length;

      threads.thread.map((thread,i)=>{
        let attachCtr = thread.content.attachments.length;
        thread.content.attachments.map( async (attachment,x) =>{
          await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${context.state.userId}/messages/${payload.threadId}/attachments/${attachment.attachmentId}`,{
            headers:config.getHeaders(context)
          }).then(response =>{
            attachCtr--;
            let base64Code = response.data.data;
            let padding = '='.repeat((4 - base64Code.length % 4) % 4);
            let base64Content = (base64Code + padding).replace(/-/g, '+').replace(/_/g, '/').replace(/ /g,'+');
                attachment.data = base64Content;
                attachment.size = response.data.size;
                attachment.fileUrl =`data:${attachment.mimeType};base64,${base64Content}`

            if( attachCtr == 0 ){
              if( thCtr > 0 ) thCtr--;
              if( thCtr == 0 ){
                threads.attachmentsAdded = true;
                setTimeout(function(){
                  
                 console.log("Before sorting::",threads);
                 threads.attachmentLists = helpers.mergeAttachments(threads); 
                 console.log("After sorting::",threads);
                  context.commit("SET_THREADBYID",JSON.parse(JSON.stringify(threads)));
                },2000)
                
              }
            }
            return attachment;
          })
        })
        
        return thread;
      })
      /* console.log("after all the processes::",threads) */

    },
    async SET_CALENDAR(context,payload){
      /* await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${context.state.userProfile.email}/events`,{
        headers:{
          Authorization:  `Bearer ${context.state.accessToken}`
        },
        params:{
          timeMin: '2021-01-01T10:00:00-07:00'
        }
      })
      .then((response)=>{
          console.log("Response:::", response)
          context.commit("SET_LOADER",false);
      });
      context.commit("SET_CALENDAR",payload); */
      /* context.commit("SET_LOADER",false); */
    },
    async SET_EVENTS(context,payload){
      var calendarEvents = []
      await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${context.state.userProfile.email}/events`,{
        headers:config.getHeaders(context),
        params:{
          timeMin: payload.min,
          timeMax: payload.max,
        }
      })
      .then((response)=>{
          response.data.items.forEach((event)=>{
              var calEvent = [];
              calEvent.name = event.summary;
              calEvent.details = event.description;
              calEvent.start = event.start.date ? new Date(event.start.date) : new Date(event.start.dateTime);
              calEvent.end = event.end.date ? new Date(event.end.date) : new Date(event.end.dateTime);
              calEvent.color = 'pink';
              calEvent.timed = true;
              calendarEvents.push(calEvent);
          });
          /* context.commit("SET_LOADER",false); */
      });
      context.commit("SET_CALENDAR",calendarEvents);
      /* context.commit("SET_LOADER",false); */
    },
    async SET_CONTACTS(context,payload){
      /* https://people.googleapis.com/v1/otherContacts?readMask=names,emailAddresses,phoneNumbers */
      /* https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses,phoneNumbers,photos */
      var setContacts = [];
      await axios.get(`https://people.googleapis.com/v1/people/me/connections`,{
        headers:config.getHeaders(context),
        params:{
          personFields:'emailAddresses,names,genders,urls,locations,occupations,events,phoneNumbers,addresses,coverPhotos,photos,organizations',
        }
      }).then((response)=>{

        var internalContacts =[];
        if(response.data.connections != undefined){
        /* console.log("Internal Data::::",response.data.connections) */
        response.data.connections.forEach((contact)=>{
          var contactInfo = [];
          contactInfo.photoUrl = contact.photos ? contact.photos[0].url:'';
          contactInfo.name = contact.names ?  contact.names[0].displayName :'';
          contactInfo.title = contact.organizations ? contact.organizations[0].title : '';
          contactInfo.org = contact.organizations ? contact.organizations[0].name : '';
          contactInfo.phone = contact.phoneNumbers ? contact.phoneNumbers[0].value : '';
          contactInfo.location = contact.locations ? contact.locations[0].value : '';
          contactInfo.email = contact.emailAddresses ? contact.emailAddresses[0].value :'';
          contactInfo.type = 'internal';
          internalContacts.push(contactInfo);
        });
        }
        setContacts.internal = internalContacts;
      });

      await axios.get(`https://people.googleapis.com/v1/otherContacts?sources=READ_SOURCE_TYPE_PROFILE&sources=READ_SOURCE_TYPE_CONTACT`,{
        headers:config.getHeaders(context),
        params:{
          readMask: 'emailAddresses,names,genders,urls,locations,occupations,events,phoneNumbers,addresses,coverPhotos,photos,organizations',
        }
      }).then((response)=>{
        if( response.data.otherContacts != undefined){
          
        context.state.contacts.external = response.data.otherContacts;
        var externalContacts =[];
        var all = [];
        response.data.otherContacts.forEach((contact)=>{
          var contactInfo = [];
          contactInfo.photoUrl = contact.photos ? contact.photos[0].url:'';
          contactInfo.name = contact.names ? contact.names[0].displayName :  contact.emailAddresses ? contact.emailAddresses[0].value.split(/@/)[0]:'';
          contactInfo.title = contact.organizations ? contact.organizations[0].title : '';
          contactInfo.phone = contact.phoneNumbers ? contact.phoneNumbers[0].value : '';
          contactInfo.org = contact.organizations ? contact.organizations[0].name : '';
          contactInfo.location = contact.locations ? contact.locations[0].value : '';
          contactInfo.email = contact.emailAddresses ? contact.emailAddresses[0].value :'';
          contactInfo.type = 'external';
          externalContacts.push(contactInfo);
        })
        /* context.state.contacts.external = externalContacts; */
        setContacts.external = externalContacts;
        setContacts.all = setContacts.internal.concat(setContacts.external);
        /* context.state.contacts.all = all;
        setContacts.all = all; */
        context.commit("SET_CONTACTS",setContacts);
        }
      });
      
      context.commit("SET_LOADER",false);
      /* context.commit("SET_LOADER",false); */
    },
    async SET_STORAGE(context,payload){
      await axios.get(`https://www.googleapis.com/drive/v3/files`,{
        headers:config.getHeaders(context),
        params:{
          pageSize: 20,
          trashed:false,
          fields:'*',
          q:"mimeType = 'video/mp4' or mimeType = 'image/jpeg' or mimeType contains 'application/vnd.google-apps.document'",
        }
      }).then((response)=>{
        /* context.state.storage.nextPageToken = response.nextPageToken; */
        payload = response.data.files.map((file)=>{
          var newFile = [];
          var date = new Date(file.modifiedTime);

          newFile.modifiedTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
          newFile.thumbnailLink = file.thumbnailLink;
          newFile.ownedByMe = file.ownedByMe;
          newFile.owners = file.owners;
          newFile.originalFilename = file.originalFilename ? file.originalFilename.length > 15 ? file.originalFilename.slice(0,15) + '...' : file.originalFilename : file.originalFilename;
          newFile.permissions = file.permissions;

          let computedSize = helpers.computeFileSize(file.size);
          newFile.size = computedSize.size;
          newFile.sizeExt = computedSize.ext;
          newFile.fileType = file.mimeType.split('/')[0];
          return newFile;
        });

        payload.nextPageToken = response.data.nextPageToken;
      });
      context.commit("SET_STORAGE",payload);
      /* context.commit("SET_LOADER",false); */
    },
    SET_SETTINGS(state,payload){
      state.commit("SET_SETTINGS",payload);
     /*  state.commit("SET_LOADER",false);  */
    },
}

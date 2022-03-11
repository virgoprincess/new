export default{
    SET_CURRENTMENU(state,payload){
        console.log("actions.js :::");
        state.commit("SET_CURRENTMENU",payload);
    },

    SET_DASHBOARD(state,payload){
        payload = [
                {
                messages:{
                    type:"1",
                    time:"10:52 AM",
                    profileInfo:{ firstName:"Michael", lastName:"Williams",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/f21ce49c84cbcc1afa4c408d997c1949?s=400&d=robohash&r=x" },
                    messageContent:{
                        subject:"Scheduling a call with new lead",
                        message:"Hi there, this is Liam from SparksServices, I saw you signed up for a free trial on our website. Can we set up a time for a phone call to walk through our product?"
                        },
                    attachments:[
                        {fileType:"image",fileUrl:'/images/image-file.jpg',firstName:"Sample.jpg"},
                        {fileType:"image",fileUrl:'/images/image-file-2.jpg',firstName:"Sample.jpg"},
                        {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Literature.pdf",fileSize:"100 MB"},
                    ]
                }
            },
            {
                messages:{
                    type:"2",
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
                    time:"10:52 AM",
                    profileInfo:{ firstName:"Hillary", lastName:"Wilson",jobTitle:"Executive", profileImage:"https://avatars.dicebear.com/v2/female/04ffc0c2338bad4bdb2e8661625ce1cc.svg" },
                    messageContent:{
                        subject:"Thank you text after an initial call",
                        message:"Hi Joe, thank you for taking the time for a call today. We’re excited to take next steps with you on your home renovation, we’ll check back in a few days once you’ve had some time to crunch the numbers."
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
            "messages": [
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
    },

    SET_EMAILS(state,payload){
        payload = [
          {
            messages:{
                type:"1",
                time:"10:52 AM",
                profileInfo:{ firstName:"Michael", lastName:"Williams",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/f21ce49c84cbcc1afa4c408d997c1949?s=400&d=robohash&r=x" },
                messageContent:{
                    subject:"Scheduling a call with new lead",
                    message:"Hi there, this is Liam from SparksServices, I saw you signed up for a free trial on our website. Can we set up a time for a phone call to walk through our product?"
                    },
                attachments:[
                    {fileType:"image",fileUrl:'/images/image-file.jpg',firstName:"Sample.jpg"},
                    {fileType:"image",fileUrl:'/images/image-file-2.jpg',firstName:"Sample.jpg"},
                    {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Literature.pdf",fileSize:"100 MB"},
                ]
            }
        },
        {
          messages:{
              type:"2",
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
              time:"10:52 AM",
              profileInfo:{ firstName:"Hillary", lastName:"Wilson",jobTitle:"Executive", profileImage:"https://avatars.dicebear.com/v2/female/04ffc0c2338bad4bdb2e8661625ce1cc.svg" },
              messageContent:{
                  subject:"Thank you text after an initial call",
                  message:"Hi Joe, thank you for taking the time for a call today. We’re excited to take next steps with you on your home renovation, we’ll check back in a few days once you’ve had some time to crunch the numbers."
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
        {
          messages:{
              type:"1",
              time:"10:52 AM",
              profileInfo:{ firstName:"Michael", lastName:"Williams",jobTitle:"Executive", profileImage:"https://gravatar.com/avatar/f21ce49c84cbcc1afa4c408d997c1949?s=400&d=robohash&r=x" },
              messageContent:{
                  subject:"Scheduling a call with new lead",
                  message:"Hi there, this is Liam from SparksServices, I saw you signed up for a free trial on our website. Can we set up a time for a phone call to walk through our product?"
                  },
              attachments:[
                  {fileType:"image",fileUrl:'/images/image-file.jpg',firstName:"Sample.jpg"},
                  {fileType:"image",fileUrl:'/images/image-file-2.jpg',firstName:"Sample.jpg"},
                  {fileType:"pdf",fileUrl:'/images/files/Design.pdf',fileName:"Literature.pdf",fileSize:"100 MB"},
              ]
          }
      },
      {
        messages:{
            type:"2",
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
            time:"10:52 AM",
            profileInfo:{ firstName:"Hillary", lastName:"Wilson",jobTitle:"Executive", profileImage:"https://avatars.dicebear.com/v2/female/04ffc0c2338bad4bdb2e8661625ce1cc.svg" },
            messageContent:{
                subject:"Thank you text after an initial call",
                message:"Hi Joe, thank you for taking the time for a call today. We’re excited to take next steps with you on your home renovation, we’ll check back in a few days once you’ve had some time to crunch the numbers."
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
        state.commit("SET_EMAILS",payload);
    },
    SET_CALENDAR(state,payload){
      state.commit("SET_CALENDAR",payload);
    },
    SET_CONTACTS(state,payload){
      state.commit("SET_CONTACTS",payload);
    },
    SET_STORAGE(state,payload){
      state.commit("SET_STORAGE",payload);
    },
    SET_SETTINGS(state,payload){
      state.commit("SET_SETTINGS",payload);
    },
}

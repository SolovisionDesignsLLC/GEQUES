import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders : {
      google : {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email']
      },
      facebook : {
        clientId: secret('FACEBOOK_CLIENT_ID'),
        clientSecret: secret('FACEBOOK_CLIENT_SECRET'),
        scopes: ['email']
      },
      callbackUrls:[
        'http://localhost:3000/profile',
        'GEQues://'
      ],
      logoutUrls:[
        'http://localhost:3000',
        'GEQues://'
      ]
    }
  },
  userAttributes:{
    birthdate : {
      mutable: true,
      required: false
    },
    givenName : {
      required: false,
      mutable:true
    },
    familyName : {
      mutable: true,
      required: false
    },
    "custom:lineName" : {
      mutable: true,
      dataType: "String"
    },
    "custom:yearInitiated" :{
      dataType: "Number",
      mutable: true
    },
    "custom:homeTown" : {
      dataType: "String",
      mutable: true
    },
    "custom:major" : {
      dataType: "String",
      mutable: true
    }


  }
});

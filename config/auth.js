// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1343947515712715', // your App ID
        'clientSecret'    : '46cf45efba4bee16a100217ae1772695', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'ZxMHVV2MGoR9ThC8hr0Vk7vVR',
        'consumerSecret'     : 'KHhr5rt4xt58MmmVjr8ZMFDSq7dz6otszPegSKUxX5wknzkkth',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '28697958189-f9o43ib8pas8e1fagn5gfrsvksru8i4a.apps.googleusercontent.com',
        'clientSecret'     : 'QPvIBthBnNAnjjd12ZRxeolq',
        'callbackURL'      : 'http://127.0.0.1:8080/auth/google/callback'
    }

};

// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// define the schema for our user model
var transactionSchema = new Schema({
    date: String,
    description: {
        type: String,
        enum: ['withdrawal', 'deposit', 'yield',]
      },
      // status: {
      //     type: String,
      //     enum: ['completed', 'pending', 'failed',]
      //   },
    amount: Number,
    balance: Number,
})

var userSchema = Schema({
  //  transaction             : {type: Schema.ObjectId, ref: 'Transaction'},
    local            : {

        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    overview : {
        name     : String,
       balance      : Number,
       deposit      : Number,
       withdrawn      : Number,
       returns      : Number,

    },
      transaction : [transactionSchema]




});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

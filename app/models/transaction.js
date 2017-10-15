var mongoose = require('mongoose');

// define the schema for our user model
var transactionSchema = mongoose.Schema({
    date: Date,
    description: String,
    amount: Number,
    balance: Number,
    // overview : {
    //    balance      : Number,
    //    deposit      : Number,
    //    withdrawn      : Number,
    //    returns      : Number,
    //
    // }



});
module.exports = mongoose.model('Transaction', transactionSchema);

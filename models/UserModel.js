
var mongoose = require('mongoose');

/*
    TODO:   Complete the UserSchema which will contain the name and the
            number of contacts in the database.
*/

var UserSchema = new mongoose.Schema({
    // your code here
    name: String,
    number: Number
});

module.exports = mongoose.model('User', UserSchema);

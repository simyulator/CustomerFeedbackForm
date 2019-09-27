const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerLoginSchema = new Schema({
    email: String,
    name: String,
    password: String
})

var login = mongoose.model('login', customerLoginSchema);

module.exports = login;
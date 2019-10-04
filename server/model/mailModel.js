const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mailSchema = new Schema({
    from: String,
    to: String,
    subject: String,
    text: String
})

var mail = mongoose.model('sendmails', mailSchema);

module.exports = mail;
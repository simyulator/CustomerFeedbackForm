const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    topicID: Number,
    topicName: String,
    topicFeedbacks: [{
        feedID: Number,
        respondent: String,
        feedback: String
    }]
})
module.exports = mongoose.model('user', customerSchema);
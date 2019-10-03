const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    topicID: Number,
    topicName: String,
    topicDescription: String,
    topicFeedbacks: [{
        feedID: Number,
        respondent: String,
        email: String,
        feedback: String
    }]
})


var user = mongoose.model('user', customerSchema);

module.exports = user;

// module.exports = mongoose.model('user', customerSchema);
// module.exports = mongoose.model('login', customerLoginSchema);
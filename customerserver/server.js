const express = require('express');
const router = require('./router/customerRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');


mongoose.connect("mongodb://localhost:27017/customer", {
    useNewUrlParser: true
}).then(() => console.log('connection established'))
.catch(err => {console.error(err);  process.exit()});

app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(3000, ()=>console.log('Express Server Started'));

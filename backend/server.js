var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var PORT = 3000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const db = 'mongodb://127.0.0.1:27017/mernlogin'
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) { console.log('error:' + err) } else { console.log('connected to mongodb') }
})

var Users = require('./routes/Users') //api name is Users

app.use('/users', Users)

app.get('/', function(req, res) {
    res.send('hello bhanu');
})

app.listen(PORT, function() {
    console.log('server running on port : ' + PORT)
})
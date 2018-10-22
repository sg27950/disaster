var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// app.use(express.static(__dirname+'/disaster/dist'));
app.use(express.static(__dirname+'/disaster/dist/disaster'));
//use above if windows, else, use the first for mac

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/Disaster', {useNewUrlParser: true } );

mongoose.Promise = global.Promise; // optional

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log('on port 8000');
});
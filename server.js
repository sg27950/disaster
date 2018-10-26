/**
 * Copyright 2018 (c) Wai All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    console.log('Flying high on port 8000');
});
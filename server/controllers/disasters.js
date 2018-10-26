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

var mongoose = require('mongoose');
var Disaster = mongoose.model('Disaster');
var MyBag = mongoose.model('MyBag');

module.exports = {
    
    createBag: function(req,res){
        console.log('backend createBag function triggered');

        Disaster.find({}, function(err, onlyuser) {
            console.log('onlyusers length is ' + onlyuser.length);
            if (onlyuser.length == 0) {
                var x = {};
                console.log(x);
                x.userNum = 1;
                x.myBag = req.body;
                var predefinedBag = new Disaster(x);

                predefinedBag.save(function(err){
                    if(err){
                        console.log('got errors');
                        res.json(err);
                    }
                    // else{
                    //     console.log('success!');
                    //     res.json(predefinedBag);
                    // }
                });
            }
            arrayofbags = [];
            console.log('length of myBag ' +req.body.myBag.length);
            for(var i=0; i<req.body.myBag.length; i++){
                MyBag.create(req.body.myBag[i], function(err, theupdatedbag){
                    if (err){
                        res.json(err);                
                    }
                    else{
                        console.log(theupdatedbag);
                        arrayofbags.push(theupdatedbag);
                        // res.json({"key":"it works"});
                    }
                });
            }
            console.log('this is the arrayofbags: '+ arrayofbags);
            
            //the following code will wait until the arrayofbags is filled, before running the code
            continueExec();
            function continueExec() {
                if (arrayofbags.length < req.body.myBag.length) {
                    setTimeout(continueExec, 100);
                    return;
                }
                Disaster.findOne({userNum: 1}, function(err, disaster){
                    disaster.myBag = arrayofbags;
                    disaster.save(function(err){
                        if(err){
                            res.json(err);
                        }
                        else{
                            res.json(disaster);
                        }
                    });
                });
                
            }    
            
        });
    },

    readBag: function(req,res){
        console.log('readBag function triggered');

        Disaster.find({}, function(err, onlyuser) {
            console.log('onlyusers length is ' + onlyuser.length);
            if (onlyuser.length == 0) {
                var x = {};
                x.userNum = 1;
                x.myBag = req.body;
                console.log(x);
                var predefinedBag = new Disaster(x);
                
                predefinedBag.save(function(err){
                    if(err){
                        console.log('got errors');
                        res.json(err);
                    }
                    // else{
                    //     console.log('success!');
                    //     res.json(predefinedBag);
                    // }
                });
            }
        });
        console.log('readbag findOne');
        Disaster.findOne({userNum: 1}, function(err, disaster){
            res.json(disaster);
        });
    },

    printme: function(req,res){
        console.log(req.body);
    }
};
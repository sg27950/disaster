var mongoose = require('mongoose');
var Disaster = mongoose.model('Disaster');
var MyBag = mongoose.model('MyBag');

module.exports = {
    
    createBag: function(req,res){
        console.log('createBag function triggered');

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
                    }else{
                        console.log('success!');
                        res.json(predefinedBag);
                    }
                });

            }else{
                // var y = {
                //     "myBag": [
                //         {
                //             "item": "cellphone",
                //             "weight": 2
                //         }
                //     ]
                // }
                // var newbag = new MyBag({"item":"cellphone","weight":2});
                // // console.log('req.body: '+ req.body[0]);
                // newbag.save(function(err){
                //     if(err){
                //         console.log('got errors')
                //         res.json(err);
                //     }else{
                //         console.log('newbag made: '+ newbag);
                //         res.json(newbag);
                //     }
                // })
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

                continueExec();
                function continueExec() {
                    //here is the trick, wait until var callbackCount is set number of callback functions
                    if (arrayofbags.length < req.body.myBag.length) {
                        setTimeout(continueExec, 100);
                        return;
                    }
                    //Finally, do what you need
                    Disaster.findOne({userNum: 1}, function(err, disaster){
                        disaster.myBag = arrayofbags;
                        disaster.save(function(err){
                            if(err){
                                res.json(err);
                            }
                            // else{
                            //     res.json(restaurant);
                            // }
                        });
                    });
                    
                }

     


                    // Disaster.findOneAndUpdate({userNum: 1}, {$push: {myBag: theupdatedbag}}, function(err,data){
                    //     console.log('findoneandupdate: '+ data);
                    //     if(err){
                    //         res.json(err);
                    //         console.log('made it to the end');
                    //     }
                    //     // else{
                    //     //     res.json({key: 'itworks'});  
                    //     // }
                    // })
                        
                    
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
                    }else{
                        console.log('success!');
                        res.json(predefinedBag);
                    }
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
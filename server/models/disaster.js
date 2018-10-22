var mongoose = require('mongoose');

var MyBagSchema = new mongoose.Schema({
    item: {type: String},
    weight: {type: Number}
}, {timestamps: true});
mongoose.model('MyBag', MyBagSchema);

var DisasterSchema = new mongoose.Schema({
    userNum: {type: Number},
    myBag: [MyBagSchema]
}, {timestamps: true});
mongoose.model('Disaster', DisasterSchema);

//example of the array being sent in:
//   [{item: 'cellphone', weight: 2}, {item: 'laptop', weight: 9}]






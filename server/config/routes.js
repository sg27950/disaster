var disasters = require('../controllers/disasters.js');
var path = require('path');
module.exports = function(app){
    app.post('/api/readBag', disasters.readBag);
    app.post('/api/createBag', disasters.createBag);
    app.post('/api/printme', disasters.printme);
    app.all('*',(req,res)=> res.sendFile(path.resolve('./disaster/dist/disaster/index.html')));
};

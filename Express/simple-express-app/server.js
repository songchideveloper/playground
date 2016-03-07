/**
 * Simple server
 * Created by chi on 3/3/16.
 */


var express = require('express');
var app = express();

//app.use('/', function(req, res) {
//    res.send('Hello Express');
//})

app.get('/hello', function(req, res){
    res.send('Hello there, I am express');
})



app.listen(3000, function(){
    console.log('listening http://localhost:3000');
})


module.exports = app;
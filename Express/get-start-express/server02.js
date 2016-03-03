/**
 * Created by chi on 3/2/16.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('hey, expressjs, auto run');
});

var server = app.listen(3001, function(){
   console.log('Server running at http://localhost:' + server.address().port)
})
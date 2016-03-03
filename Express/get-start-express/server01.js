/**
 * Created by chi on 3/2/16.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello, express');
});


app.listen(3001);
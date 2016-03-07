/**
 * Created by chi on 3/3/16.
 */


var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
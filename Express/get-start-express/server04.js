/**
 * Created by chi on 3/2/16.
 */

var express = require('express');
var app = express();
var fs = require('fs');
var _ = require('lodash');
var users = [];


fs.readFile('users.json', {encoding: 'utf8'}, function(err, data){
   if (err) throw err;

    JSON.parse(data).forEach(function(user){
        users.push(user);
    });


});


app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    var buffer = ''
    users.forEach(function(user){
        var fullname = _.startCase(user.name.first + ' ' + user.name.last)
       buffer += '<a href="/' + user.username + '">' + fullname + '</a>' + '<br>'
    })
    res.send(buffer);
})


app.get('/:username', function(req, res){
    var username = req.params.username;
    res.send(username);
})


var server = app.listen(3001);
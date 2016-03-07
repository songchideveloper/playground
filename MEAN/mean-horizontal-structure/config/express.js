/**
 * Created by chi on 3/3/16.
 */

var express = require('express');

module.exports = function() {
    var app = express();
    var routes = require('../app/routes/index.server.routes.js')(app);
    return app;
};
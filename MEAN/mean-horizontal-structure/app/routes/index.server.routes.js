/**
 * Created by chi on 3/3/16.
 */


module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};
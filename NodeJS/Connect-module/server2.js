/**
 *
 * Demo of next(): the Connection flow
 * Created by chi on 3/3/16.
 */




var connect = require('connect');
var app = connect()

var helloConnect = function(req, res, next) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello Connect!');
}

var logger = function(req, res, next) {
    console.log(req.method, req.url);

    next();
}


app.use(logger);
app.use(helloConnect);

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
});




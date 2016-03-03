/**
 * Created by chi on 3/2/16.
 */


var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });
    res.end("Hello from <strong>Node</strong> http");
});


server.listen(3000);
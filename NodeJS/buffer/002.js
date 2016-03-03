/**
 * Created by chi on 2/29/16.
 */


var http = require('http');

http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hwllo world\n');
}).listen(8081);

console.log("Server is running!");
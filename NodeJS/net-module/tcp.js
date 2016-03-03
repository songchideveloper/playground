/**
 * Created by chi on 3/2/16.
 */


var net = require('net');

var server = net.createServer(function(socket){
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('Client connected! ' + socket.remoteAddress + ': ' + socket.remotePort);

    // Add a 'data' event handler to this instance of socket
    socket.on('data', function(data){
        console.log('data received: ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        socket.write('You said : ' + data);
    });

    // Add a 'close' event handler
    socket.on('end', function(){
        console.log('client disconnected!');
    })
});

server.listen(3000, function(){
    console.log('server started!')
})
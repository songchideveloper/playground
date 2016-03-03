/**
 * Created by chi on 3/1/16.
 */

var fs = require('fs');

// specify the 'utf-8'
fs.readFile('something.txt', 'utf-8', function(err, data){
    console.log(data);
})

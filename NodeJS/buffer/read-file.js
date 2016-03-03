/**
 * Created by chi on 3/1/16.
 */

var fs = require('fs');

fs.readFile('something.txt', function(err, data) {
    console.log(data);  // ==> <Buffer 68 65 6c 6c 6f 20 ...>
    console.log(data.toString());  // ==> hello node js
});





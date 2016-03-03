/**
 * Created by chi on 3/1/16.
 */

var buf = new Buffer(5);
buf.write('Hello World');
var out = buf.toString();
console.log('out: ' + out)  // => 'Hello'

var buf2 = new Buffer(10);
buf2.write('hello', 2);
var out2 = buf2.toString();
console.log('out2: ' + out2);

buf2.write('xxxxx', 5, 2);
var out3 = buf2.toString();
console.log('out3: ' + out3)

buf2.write('ABCED', 2, 3, 'utf8');
var out4 = buf2.toString();
console.log('out4: ' + out4)



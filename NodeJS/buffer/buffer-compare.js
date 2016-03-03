/**
 * Created by chi on 3/1/16.
 */


var buf1 = new Buffer('123');
var buf2 = new Buffer('124342');
var buf3 = new Buffer('123');

console.log(buf1.compare(buf2))
console.log(buf2.compare(buf1))
console.log(buf1.compare(buf3))
console.log(buf1.equals(buf2))
console.log(buf1.equals(buf3))
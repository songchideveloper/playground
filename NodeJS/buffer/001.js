/**
 * Buffer.
 *
 * Created by chi on 2/29/16.
 */


var buf = new Buffer(10);

console.log(buf.write('hello', 'utf-8'));

console.log(buf);

console.log(buf.toString('utf-8', 0, 4));
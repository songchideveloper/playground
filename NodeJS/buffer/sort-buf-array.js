/**
 * Created by chi on 3/1/16.
 */


var buf1 = new Buffer('100')
var buf2 = new Buffer('500')
var buf3 = new Buffer('200')

var arr = [buf1, buf2, buf3]
arr.sort()
console.log(arr.toString())


console.log(buf1.toJSON())
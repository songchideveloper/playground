/**
 * Created by chi on 2/25/16.
 */



var s = 'helloworld';



function reverseStr(s) {
    var newStr = '';
    for (var i = s.length - 1; i >= 0; i--) {
        newStr += s[i];
    }
    return newStr;
}

console.log(reverseStr(s));

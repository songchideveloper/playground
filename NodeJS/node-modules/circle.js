/**
 * Created by chi on 3/1/16.
 */

const PI = Math.PI;

exports.area = function(r) {
    var _area = PI * r * r
    console.log(_area);
    return _area;
}

exports.circumference = function(r) {
    var _c = PI * r * 2;
    console.log(_c);
    return _c;
}
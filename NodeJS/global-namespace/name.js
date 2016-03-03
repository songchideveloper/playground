/**
 * Created by chi on 3/1/16.
 */

var name;

exports.setName = function(val) {
    name = val;
}

exports.getName = function(){
    console.log(name);
    return name;
}
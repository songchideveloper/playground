/**
 * Created by chi on 3/2/16.
 */


var PI = Math.PI;

module.exports = function(r) {
    return {
        area: function() {
            var _out = PI * r * r
            console.log(_out)
            return _out;
        },
        circumference : function(){
            var _out = 2 * PI * r;
            console.log(_out)
            return _out;
        }
    }
}
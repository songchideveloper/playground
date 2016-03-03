/**
 * Watch out the for-loop, since Javascript don't have
 * block-level scope, the 'var i' in for loop became the
 * global scope.
 *
 *
 * Created by chi on 2/28/16.
 */


var i = 'hello'

for (var i = 0; i < 5; i++) {

}

console.log(i); // ==> 5


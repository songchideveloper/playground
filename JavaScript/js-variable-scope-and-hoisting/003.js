/**
 *
 * Created by chi on 2/28/16.
 *
 * Be sure to add 'var' in local variable
 */


var name = 'will';

function foo() {
    console.log(name);
}

function bar() {
    name = 'chisong';
    console.log(name);
}


foo();  // ==> will
bar();  // ==> chisong
foo();  // ==> chisong

/**
 * Created by chi on 2/28/16.
 *
 * Local variables have priority over global variables
 *
 */


var name = 'will';

function foo() {
    var name = 'chisong';
    console.log(name);
}


foo(); // ==> chisong
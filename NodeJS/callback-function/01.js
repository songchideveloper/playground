/**
 * Created by chi on 3/1/16.
 */


var foo = function(sal){
    if (sal < 60000 ) {
        console.log('Your need to work hard, man!')
    } else if (sal >= 12000) {
        console.log('Damn, you are so rich man!')
    } else {
        console.log('You could live well!')
    }
}


var bar = function(sal) {
    if (sal < 60000 ) {
        console.log('Wish you money!')
    } else if (sal >= 12000) {
        console.log('Bless your health!')
    } else {
        console.log('You are well!')
    }
}


var getInput = function(param, cbf) {
    cbf(param);
}


getInput(30000, foo);
getInput(30000, bar);

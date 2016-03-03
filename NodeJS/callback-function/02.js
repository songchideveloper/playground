/**
 * Created by chi on 3/1/16.
 */


process.nextTick(function(){
   console.log('nextTick callback');
});

setTimeout(function(){console.log("nextTick callback")}, 0);
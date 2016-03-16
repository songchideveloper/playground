
(function(){
    angular.module('app', [])
        .directive('helloWorld', function(){
            return {
                restric: 'AE',
                replace: 'true',
                template: '<h3>Hello Custom Directive!</h3>'
            }
        })
})();
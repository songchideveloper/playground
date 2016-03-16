
(function(){
    angular.module('app', [])
        .directive('helloWorld', function(){
           return {
               restrict: 'AE',
               replace: 'true',
               template: '<p style="background-color: {{color}};">Hello world custom directive</p>',
               link: function(scope, elem, attrs) {
                   elem.bind('click', function(){
                       elem.css('background-color', 'white');
                       scope.$apply(function(){
                          scope.color = "white";
                       });
                   });
                   elem.bind('mouseover', function(){
                       elem.css('cursor', 'pointer');
                   })
               }
           }
        })
})();



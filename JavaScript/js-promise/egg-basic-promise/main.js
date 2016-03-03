/**
 * Created by chi on 3/1/16.
 */


(function(){
    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'app.html',
                    controller: 'appController'
                })
        })
        .controller('appController', function($scope){
            $scope.hello = 'hello';
        })

})();

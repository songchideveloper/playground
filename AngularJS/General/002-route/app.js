(function(){
    angular.module('app', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/home', {
                    templateUrl: 'home.html'
                })
                .when('/profile', {
                    templateUrl: 'profile.html'
                })
                .when('/about', {
                    templateUrl: 'about.html'
                })
                .otherwise({
                    templateUrl: 'home.html'
                })

        })

})();
'use strict';

var webApp = angular.module('webApp', []);

/* Router */
webApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/home'
        }).otherwise({
                redirectTo: '/home'
            });
    }]);
/*
 =================================================
 nodejs-static-angularjs
 Copyright (c) 2014 Luis Enrique Arriojas Catalini
 http://opensource.org/licenses/MIT
 =================================================
 */
'use strict';

var webApp = angular.module('webApp', []);

/* Router */
webApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/home',
            controller: homeCtrl
        }).when('/about', {
                templateUrl: '/about',
                controller: aboutCtrl
            }).when('/contact', {
                templateUrl: '/contact',
                controller: contactCtrl
            }).otherwise({
                redirectTo: '/home'
            });
    }]);

/* Fix to crawlers */
webApp.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);

/* Service: Models in metadata */
webApp.factory('Meta', function () {
    return {
        tags: {
            description: '',
            keywords: '',
            title: ''
        }
    };
});
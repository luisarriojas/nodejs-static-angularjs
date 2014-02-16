/*
 =================================================
 nodejs-static-angularjs
 Copyright (c) 2014 Luis Enrique Arriojas Catalini
 http://opensource.org/licenses/MIT
 =================================================
 */
'use strict';

function webCtrl($scope, Meta) {
    $scope.webMeta = Meta.tags;
}

function homeCtrl($scope, Meta) {
    $scope.webMeta = Meta.tags;
    $scope.webMeta.description = "Home page";
    $scope.webMeta.keywords = "home webserver";
    $scope.webMeta.title = "Home";
}

function aboutCtrl($scope, Meta) {
    $scope.webMeta = Meta.tags;
    $scope.webMeta.description = "About page";
    $scope.webMeta.keywords = "about  webserver";
    $scope.webMeta.title = "About";
}

function contactCtrl($scope, Meta) {
    $scope.webMeta = Meta.tags;
    $scope.webMeta.description = "Contact page";
    $scope.webMeta.keywords = "contact webserver";
    $scope.webMeta.title = "Contact";
}
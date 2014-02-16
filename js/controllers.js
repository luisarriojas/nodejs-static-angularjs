'use strict';

function webCtrl($scope, $location, Meta) {
    $scope.webMetas = Meta.tags;
}
'use strict';

/**
 * @ngdoc function
 * @name todoozleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoozleApp
 */
angular.module('todoozleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

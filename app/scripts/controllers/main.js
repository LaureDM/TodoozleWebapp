'use strict';

/**
 * @ngdoc function
 * @name todoozleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoozleApp
 */
angular.module('todoozleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

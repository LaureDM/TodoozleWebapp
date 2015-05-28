'use strict';

/**
 * @ngdoc overview
 * @name todoozleApp
 * @description
 * # todoozleApp
 *
 * Main module of the application.
 */
var app = angular
  .module('todoozleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/todo', {
        templateUrl: 'views/todolist.html',
        controller: 'TodoControl'
      })
      .when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

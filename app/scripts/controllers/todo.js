/**
 * Created by Laure on 20/01/2015.
 */
'use strict';

app.controller('TodoControl', function($scope){

  $scope.today = new Date();

  $scope.chores = [];
  $scope.doneChores = [];

  $scope.new = {};

  $scope.submitChore = function(){
      $scope.chores.push($scope.new);
      $scope.new = {};
  };

  $scope.moveToDone = function(doneChore){
    $scope.doneChores.push(doneChore);
    $scope.chores.splice($scope.chores.indexOf(doneChore),1);
  };
});

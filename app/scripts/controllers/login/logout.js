var app = angular.module('omsDemoApp');
app.controller('logoutCtrl', function($scope, $stateParams, $state) {

 $scope.userlogout= function(){
  	
  $state.go('login');
  }
  });
var app = angular.module('omsDemoApp');
app.controller('adminlistCtrl', function($scope, $stateParams, $state) {

$scope.createitem= function(admin){
  	$state.go('userlist');
  }

$scope.adminlogout= function(){
  	
  $state.go('login');
}

  });
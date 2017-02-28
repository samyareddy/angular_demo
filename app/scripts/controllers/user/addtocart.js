var app = angular.module('omsDemoApp');
app.controller('addtocartCtrl', function($scope, $stateParams, $state) {

$scope.userorders= function(){
  	$state.go('userorders');
  }

$scope.userlogout= function(){
  	
  $state.go('login');
}

$scope.createorder= function(user){
  	$state.go('userorders');
  }




  });
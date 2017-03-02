var app = angular.module('omsDemoApp');
app.controller('adminlistCtrl', function($scope, $stateParams, ItemService, $state) {

$scope.adminCreate = function(item){

	ItemService.adminCreate(item);
  	$state.go('userlist');
  }






$scope.adminlogout= function(){
  	$state.go('login');
}

  });
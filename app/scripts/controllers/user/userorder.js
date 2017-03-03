var app = angular.module('omsDemoApp');
app.controller('userordersCtrl', function($scope, $stateParams, ItemService, $state) {




$scope.usercreateorder= function(){
  	$state.go('addtocart');
  }

$scope.userlogout= function(){
  	
  $state.go('login');
}



$scope.itemList= function(){
  	
  $state.go('userlist');
}
  });
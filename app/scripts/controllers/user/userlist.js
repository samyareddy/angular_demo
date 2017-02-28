var app = angular.module('omsDemoApp');
app.controller('userlistCtrl', function($scope, $stateParams, $state) {

 $scope.userorders= function(){
  	
  $state.go('userorders');
  }

$scope.usercreateorder= function(){
  	$state.go('addtocart');
  }
  
 $scope.addtocart= function(){
  	
  $state.go('addtocart');
  }
$scope.userlogout= function(){
  	
  $state.go('login');
}

  });
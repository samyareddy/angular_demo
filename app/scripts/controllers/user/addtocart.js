var app = angular.module('omsDemoApp');
app.controller('addtocartCtrl', function($scope, $stateParams, ItemService, $state) {




 $scope.cartList = ItemService.cartDetails();

$scope.userorders= function(){
  	$state.go('userorders');
  }

$scope.userlogout= function(){
  	
  $state.go('login');
}


$scope.deleteItem= function(index){
  console.log("item")
  ItemService.deleteItem(index);
 $scope.cartList = ItemService.cartDetails();
  }

$scope.itemList= function(){
  	$state.go('userlist');
  }


$scope.createOrder= function(item){

 $scope.cartList = ItemService.createOrder(item);

  	$state.go('userorders');
  }










  });
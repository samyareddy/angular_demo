var app = angular.module('omsDemoApp');
app.controller('userlistCtrl', function($scope, $stateParams, ItemService, $state) {
  
$scope.itemList = ItemService.itemDetails();


 $scope.userOrders= function() {
  $state.go('userorders');
  }

$scope.createOrder= function() {
  $state.go('addtocart');
  }
  
$scope.addtocart= function(item) {
  $scope.cartList = ItemService.addtocart(item);
  
  }

$scope.userLogout= function() {
  $state.go('login');
  }

  });








 
    
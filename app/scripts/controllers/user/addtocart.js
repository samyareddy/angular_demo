var app = angular.module('omsDemoApp');
app.controller('addtocartCtrl', function($scope, $stateParams, ItemService, $state) {

 $scope.cartList = ItemService.cartDetails();

  $scope.userOrders= function(){
    $state.go('userorders');
  }

  $scope.userLogout= function(){
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

  $scope.createOrder= function(){
 
 $scope.cartList = ItemService.createOrder();
    $state.go('userorders');
  }

  });
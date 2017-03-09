var app = angular.module('omsDemoApp');
app.controller('userordersCtrl', function($scope, $stateParams, ItemService, $state) {

  $scope.OrderList = ItemService.orderDetails();

    $scope.userLogout= function(){
  	    $state.go('login');
    }    

    $scope.itemList= function(){
  	    $state.go('userlist');
    }

});
var app = angular.module('omsDemoApp');
app.controller('userlistCtrl', function($scope, $stateParams, ItemService, $state) {
  
    $scope.itemList = ItemService.itemDetails();
    $scope.searchCategory = {};
    $scope.searchCategory.books = true;
    $scope.searchCategory.furniture = true;
    $scope.searchCategory.grocery = true;
    $scope.searchCategory.clothing = true;
    $scope.selectedCategoriesList = ["books", "furniture", "grocery", "clothing"]

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

  $scope.filterByCategories = function(item) {
      return ($scope.selectedCategoriesList.indexOf(item.category) !== -1);
  };

})

  .filter('bygenre', function () {
      return function (totalItems, categories) {
      var items = {
          categories: categories,
          out: []
      };

  angular.forEach(totalItems, function (value, key) {
      if (this.categories[value.category] === true) {
         this.out.push(value);
      }

  }, items);
      
  return items.out;
   
      };

  });










 
    
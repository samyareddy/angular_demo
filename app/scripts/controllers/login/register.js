var app = angular.module('omsDemoApp');
app.controller('registerCtrl', function($scope, $stateParams, userAccountService, $state) {

  $scope.save = function(user){
    userAccountService.save(user); 	
        $state.go('login');
  }
  
  });
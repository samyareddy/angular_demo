var app = angular.module('omsDemoApp');
app.controller('adminlistCtrl', function($scope, $stateParams, ItemService, $state, userAccountService) {
    
      
    $scope.adminCreate = function(item){

      ItemService.adminCreate(item);
        $state.go('userlist');
    }

    $scope.adminLogout= function(){
  	    $state.go('login');
    }

});

var app = angular.module('omsDemoApp');
app.controller('loginCtrl', function($scope, $stateParams, userAccountService, $state, $rootScope) {
  $scope.name = 'Hello';
  
  $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }

  $scope.submit=function(user)
  {
    userAccountService.isExistUser(user).then(function(resp){
      if(resp){
        userAccountService.getCurrentUserInfo(user).then(function(currentUser){
          if(currentUser.role=="admin") {
            $rootScope.user = currentUser;
            $state.go('adminlist')
  }

else {      $rootScope.user = currentUser;
            $state.go('userlist')
      }
    })
   }
  })
 }
});

var app = angular.module('omsDemoApp');

app.controller('loginCtrl', function($scope, $stateParams, userAccountService, $state) {
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
       
        $state.go('adminlist')
       }

      else {
       
         $state.go('userlist')
       }
        })
        
    	}
     
   })
  }

 });
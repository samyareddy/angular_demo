'use strict';

/**
 * @ngdoc overview
 * @name omsDemoApp
 * @description
 * # omsDemoApp
 *
 * Main module of the application.
 */
var omsDemoApp = angular.module('omsDemoApp', ['ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

 omsDemoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider)
 {
  $urlRouterProvider.otherwise("/login")
  $stateProvider
.state("login", { 
    url : "/login", 
    templateUrl : "views/login/login.html",
    controller : "loginCtrl",
})

.state("register",{
  url : "/register",
  templateUrl : "views/login/register.html",
  controller : "registerCtrl",
})

 
.state("adminlist",{
  url : "/adminlist",
  templateUrl : "views/admin/adminlist.html",
  controller : "adminlistCtrl",
})

.state("userlist",{
  url : "/userlist",
  templateUrl : "views/user/userlist.html",
  controller : "userlistCtrl",
})

.state("userorders",{
  url : "/userorders",
  templateUrl : "views/user/userorders.html",
  controller : "userordersCtrl",
})

.state("addtocart",{
  url : "/addtocart",
  templateUrl : "views/user/addtocart.html",
  controller : "addtocartCtrl"
})

}]);

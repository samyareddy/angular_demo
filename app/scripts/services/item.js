'use strict';

  var app = angular.module('omsDemoApp');
  app.factory('ItemService', function() {

    var factory = {};
   
  factory.adminCreate = function(item){

  var List =  JSON.parse(localStorage.getItem('List'));
  console.log(angular.copy(item));
     if(List == null){
        List = [];
      }
  
  List.push(item);
  console.log(angular.copy(List));
  localStorage.setItem('List', JSON.stringify(List));
  return List;
    }

    factory.itemDetails = function(){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
      return List;
    }

      return factory;
  
    }); 
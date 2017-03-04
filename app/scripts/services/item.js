'use strict';

var app = angular.module('omsDemoApp');
app.factory('ItemService', function() {

  var factory = {};
    
  factory.adminCreate = function(item){
  var ItemList =  JSON.parse(localStorage.getItem('ItemList'));
  console.log(angular.copy(item));
    if(ItemList == null){
      ItemList = [];
  }
  
  ItemList.push(item);
  console.log(angular.copy(ItemList));
  localStorage.setItem('ItemList', JSON.stringify(ItemList));
  return ItemList;
  }
  factory.itemDetails = function(){
  var ItemList =  JSON.parse(localStorage.getItem('ItemList'));
    if(ItemList == null){
       ItemList = [];
  }
   console.log(angular.copy(ItemList));
   return ItemList;
  }
  
  factory.orderDetails = function(){
  var OrderList =  JSON.parse(localStorage.getItem('OrderList'));
   if(OrderList == null){
      OrderList = [];
  }
  console.log(angular.copy(OrderList));
  return OrderList;
  }

  factory.addtocart = function(item){
  var CartList =  JSON.parse(localStorage.getItem('CartList'));
  console.log(item);
   if(CartList == null){
      CartList = [];
  var newCartItem = {
    itemName: item.itemName,
    quantity: 1,
    price: item.price,
    category: item.category
  }
    item.quantity = 1;
    CartList.push(newCartItem);
  }
  else {
  var found = false;
  for(var i=0; i< CartList.length; i++){
   if(CartList[i].itemName == item.itemName){
       found = true;
  CartList[i].quantity = CartList[i].quantity + 1;
   }
 }
    if(!found){
      var newCartItem = {
         itemName: item.itemName,
         quantity: 1,
         price: item.price,
         category: item.category
        }
      CartList.push(newCartItem);
     }
   }
  console.log(angular.copy(CartList));
  localStorage.setItem('CartList', JSON.stringify(CartList));
  return CartList;
 }
  factory.cartDetails = function(){
  var CartList =  JSON.parse(localStorage.getItem('CartList'));
   if(CartList == null){
      CartList = [];
  }
  console.log(angular.copy(CartList));
  return CartList;
  }

  factory.deleteItem = function(index){
  var CartList =  JSON.parse(localStorage.getItem('CartList'));
  console.log(angular.copy(CartList));
  CartList.splice(index, 1);
  console.log(angular.copy(CartList));
  localStorage.setItem('CartList', JSON.stringify(CartList));
  return CartList;
  }
  factory.createOrder = function(){
  var OrderList =  JSON.parse(localStorage.getItem('OrderList'));
  var CartList =  JSON.parse(localStorage.getItem('CartList'));
    if(OrderList == null){
      OrderList = [];
  }
  var order = {
   orderdate: new Date(),
   items: [],
   itemcount: CartList.length,
   orderid: Math.floor((Math.random() * 100000) + 1),
   address: "",
   total: 0,
 }
  var total = 0;
  for(var i=0; i<CartList.length; i++) {
  order.items.push(CartList[i]);
  total = total + (CartList[i].quantity * CartList[i].price);
 }   
  order.total = total;
  OrderList.push(order);

  localStorage.setItem('OrderList', JSON.stringify(OrderList));
  localStorage.removeItem('CartList');
  return OrderList;
 }

 return factory;
  
 }); 
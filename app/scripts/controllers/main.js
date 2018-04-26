'use strict';

/**
 * @ngdoc function
 * @name projetHotelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetHotelApp
 */
angular.module('projetHotelApp')
  .controller('MainCtrl', function ($scope, $http) {
        $http.get('http://127.0.0.1:8080/projetHotel/rest/etablissements').then(function(response) {
      $scope.nom = response.data; 
      console.log($scope.nom) ;
  });
 



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
  	angular.module('projetHotelApp').controller('CtrlDatePicker', function($scope, $location,$http) {
	  this.myDate = new Date();
	  this.isOpen = false;
    
      var param1 = $location.search().id ;
      $http.get('http://127.0.0.1:8080/projetHotel/rest/etablissements/'+ param1).then(function(response) {

      $scope.etablissement = response.data; 
      console.log(response.data);

      $scope.myText;





})
    
	});
  

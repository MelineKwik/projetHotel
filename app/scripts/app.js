'use strict';

/**
 * @ngdoc overview
 * @name projetHotelApp
 * @description
 * # projetHotelApp
 *
 * Main module of the application.
 */
angular
  .module('projetHotelApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngMaterial', 
	'ngMessages'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/datepicker', {
        templateUrl: 'views/datepicker.html',
        controller: 'CtrlDatePicker',
        controllerAs: 'DatePicker'
      })
	  .when('/resa', {
        templateUrl: 'views/page_pre_resa.html',
        controller: 'CtrlDatePicker',
        controllerAs: 'DatePicker'
      })
     .when('/resaPost', {
        templateUrl: 'views/page_resa.html',
        controller: 'CtrlDatePicker',
        controllerAs: 'DatePicker'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

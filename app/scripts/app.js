'use strict';

/**
 * @ngdoc overview
 * @name novaEraApp
 * @description
 * # novaEraApp
 *
 * Main module of the application.
 */
angular
  .module('novaEraApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cadastro', {
        templateUrl: 'views/cadastro.html',
        controller: 'cadastroController',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/cadastro'
      });
  });

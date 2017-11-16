'use strict';

/**
 * @ngdoc overview
 * @name app1App
 * @description
 * # app1App
 *
 * Main module of the application.
 */
angular
  .module('app1App', [
    'ngAnimate',
    'ngCookies',
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
      .when('/cartes', {
        templateUrl: 'views/cartes.html',
        controller: 'CartesCtrl',
        controllerAs: 'cartes'
      })
	  .when('/decks', {
        templateUrl: 'views/decks.html',
        controller: 'DecksCtrl',
        controllerAs: 'decks'
      })
	  .when('/deckbuilder', {
        templateUrl: 'views/deckbuilder.html',
        controller: 'DeckBuilderCtrl',
        controllerAs: 'deckBuilder'
      })
	  .when('/aventures', {
        templateUrl: 'views/aventures.html',
        controller: 'AventuresCtrl',
        controllerAs: 'aventures'
      })
	  .when('/extensions', {
        templateUrl: 'views/extensions.html',
        controller: 'ExtensionsCtrl',
        controllerAs: 'extensions'
      })
	  .when('/dos', {
        templateUrl: 'views/dos.html',
        controller: 'DosCtrl',
        controllerAs: 'dos'
      })
	  .when('/classeDeckBuilder', {
        templateUrl: 'views/classeDeckBuilder.html',
        controller: 'ClasseDeckBuilderCtrl',
        controllerAs: 'classeDeckBuilder'
      })
	  .when('/gvg', {
        templateUrl: 'views/gvg.html',
        controller: 'gvgCtrl',
        controllerAs: 'gvg'
      })
	  .when('/tgt', {
        templateUrl: 'views/tgt.html',
        controller: 'tgtCtrl',
        controllerAs: 'tgt'
      })
	  .when('/naxx', {
        templateUrl: 'views/naxx.html',
        controller: 'naxxCtrl',
        controllerAs: 'naxx'
      })
	  .when('/brm', {
        templateUrl: 'views/brm.html',
        controller: 'brmCtrl',
        controllerAs: 'brm'
      })
	  .when('/loe', {
        templateUrl: 'views/loe.html',
        controller: 'loeCtrl',
        controllerAs: 'loe'
      })
	  .when('/enregistrer', {
        templateUrl: 'views/enregistrer.html',
        controller: 'enregistrerCtrl',
        controllerAs: 'enregistrer'
      })
	  .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'connexionCtrl',
        controllerAs: 'connexion'
      })
	  .when('/wog', {
        templateUrl: 'views/wog.html',
        controller: 'wogCtrl',
        controllerAs: 'wog'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });

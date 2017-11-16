'use strict';

/**
 * @ngdoc function
 * @name app1App.controller:DeckBuilderCtrl
 * @description
 * # DeckBuilderCtrl
 * Controller of the app1App
 */
angular.module('app1App')
  .controller('DeckBuilderCtrl', function($scope){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.createCookie = function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
  });
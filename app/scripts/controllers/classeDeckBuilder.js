'use strict';

/**
 * @ngdoc function
 * @name app1App.controller:ClasseDeckBuilderCtrl
 * @description
 * # ClasseDeckBuilderCtrl
 * Controller of the app1App
 */
angular.module('app1App')
  .controller('ClasseDeckBuilderCtrl', function($scope, $http){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.inc = 0;
	var test = [];
	
	$scope.readCookie = function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	$scope.un = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	$scope.deux = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	$scope.trois = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	$scope.quatre = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	$scope.cinq = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	$scope.six = 'http://wow.zamimg.com/images/hearthstone/cards/frfr/original/GAME_005.png';
	
	
	$scope.searchCardbyClasse = function(classe) {
	$http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classe  + "?collectible=1&locale=frFR", {
		headers:{'X-Mashape-Key': '672QlplWjFmshPlkfuF4aUc4I0AQp1yTdYdjsnO32n5laZ84tC' }
			}).success(function(data) {
				$scope.test = data;
			});
	};
	
	/*$scope.trad = function(){
		switch(1) {
		case 1:
			console.log('Guerrier');
			break;
		case Shaman:
			return 'Shaman';
			break;
		case Rogue:
			return 'Voleur';
			break;
		case Paladin:
			return 'Paladin';
			break;
		case Hunter:
			Chasseur
			break;
		case Druid:
			Druide
			break;
		case Warlock:
			Demoniste
			break;
		case Mage:
			Mage
			break;
		case Priest:
			Prêtre
			break;
		default:
			default: Neutre
		}	
	}*/
	
	$scope.next = function(img1,img2,img3,img4,img5,img6) {
		$scope.inc = $scope.inc+1;
		$scope.un = img1;
		$scope.deux = img2;
		$scope.trois = img3;
		$scope.quatre = img4;
		$scope.cinq = img5;
		$scope.six = img6;
	};
	
	
	$scope.prece = function(img1,img2,img3,img4,img5,img6) {
		$scope.inc = $scope.inc-1;
		$scope.un = img1;
		$scope.deux = img2;
		$scope.trois = img3;
		$scope.quatre = img4;
		$scope.cinq = img5;
		$scope.six = img6;
	};

	
	
  });
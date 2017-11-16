'use strict';

/**
 * @ngdoc function
 * @name app1App.controller:CartesCtrl
 * @description
 * # CartesCtrl
 * Controller of the app1App
 */
angular.module('app1App')
  .controller('CartesCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.normale = 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/GAME_005.png';
	$scope.doree = 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/GAME_005_premium.gif';
	
	$scope.searchCardbyName = function(cardName) {
		$http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" + cardName + "?collectible=1&locale=enUS", {
			headers:{'X-Mashape-Key': '672QlplWjFmshPlkfuF4aUc4I0AQp1yTdYdjsnO32n5laZ84tC' }
			}).success(function(data) {
				$scope.currentCard = data;
			});
	};
	
	$scope.searchCardbyClasse = function(classe) {
	$http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classe  + "?collectible=1&locale=enUS", {
		headers:{'X-Mashape-Key': '672QlplWjFmshPlkfuF4aUc4I0AQp1yTdYdjsnO32n5laZ84tC' }
			}).success(function(data) {
				$scope.currentCard = data;
			});
	};
	
	$scope.searchCardByRarity = function(rarity) {
	$http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/" + rarity  + "?collectible=1&locale=enUS", {
		headers:{'X-Mashape-Key': '672QlplWjFmshPlkfuF4aUc4I0AQp1yTdYdjsnO32n5laZ84tC' }
			}).success(function(data) {
				$scope.currentCard = data;
			});
	};
	
	$scope.searchCardBySet = function(set) {
	$http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/" + set  + "?collectible=1&locale=enUS", {
		headers:{'X-Mashape-Key': '672QlplWjFmshPlkfuF4aUc4I0AQp1yTdYdjsnO32n5laZ84tC' }
			}).success(function(data) {
				$scope.currentCard = data;
			});
	};
	
	$scope.replace = function(norm, gold) {
			$scope.normale = norm;
			$scope.doree = gold;
			$('#myModal').modal('hide');
		
	};
	
  });

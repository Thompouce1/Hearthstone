'use strict';

/**
 * @ngdoc function
 * @name app1App.controller:DosCtrl
 * @description
 * # DosCtrl
 * Controller of the app1App
 */
angular.module('app1App')
  .controller('DosCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	

	$scope.inc = 0;
	var test = [];
	
	$scope.count = $http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks?locale=enUS", {
			headers:{'X-Mashape-Key': '9PEnuHY4ARmshO5LOSj6zT6h5Hb3p17YLJ2jsnEQfKLuTh9ZsV' }
		}).success(function(data) {
		$scope.test = data;
		});	
	
	$scope.un = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Default.gif';
	$scope.unN = 'Standard';
	$scope.deux = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Pandaria.gif';
	$scope.deuxN = 'Pandarie';
	$scope.trois = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_BlackTemple.gif';
	$scope.troisN = 'Temple noir';
	$scope.quatre = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Charm.gif';
	$scope.quatreN = 'Arc-en-ciel';
	
	$scope.cinq = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Launch.gif';
	$scope.cinqN = 'Hearthstone café';
	$scope.six = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Legend.gif';
	$scope.sixN = 'Légende';
	$scope.sept = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Naxxramas.gif';
	$scope.septN = 'Naxxramas';
	$scope.huit = 'http://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Naxxramas2.gif';
	$scope.huitN = 'Naxxramas héroïque';
	
	
	$scope.next = function(img1,name1,img2,name2,img3,name3,img4,name4,img5,name5,img6,name6,img7,name7,img8,name8) {
		$scope.inc = $scope.inc+1;
		$scope.un = img1;
		$scope.unN = name1;
		$scope.deux = img2;
		$scope.deuxN = name2;
		$scope.trois = img3;
		$scope.troisN = name3;
		$scope.quatre = img4;
		$scope.quatreN = name4;
		$scope.cinq = img5;
		$scope.cinqN = name5;
		$scope.six = img6;
		$scope.sixN = name6;
		$scope.sept = img7;
		$scope.septN = name7;
		$scope.huit = img8;
		$scope.huitN = name8;
	};
	
	
	$scope.prece = function(img1,name1,img2,name2,img3,name3,img4,name4,img5,name5,img6,name6,img7,name7,img8,name8) {
		$scope.inc = $scope.inc-1;
		$scope.un = img1;
		$scope.unN = name1;
		$scope.deux = img2;
		$scope.deuxN = name2;
		$scope.trois = img3;
		$scope.troisN = name3;
		$scope.quatre = img4;
		$scope.quatreN = name4;
		$scope.cinq = img5;
		$scope.cinqN = name5;
		$scope.six = img6;
		$scope.sixN = name6;
		$scope.sept = img7;
		$scope.septN = name7;
		$scope.huit = img8;
		$scope.huitN = name8;
	};	

  });
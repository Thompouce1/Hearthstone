'use strict';

/**
 * @ngdoc overview
 * @name aieApp
 * @description
 * # aieApp
 *
 * Main module of the application.
 */
angular
  .module('aieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
	  .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'Signin'
      })
	  .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
	  .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'ListsCtrl',
        controllerAs: 'lists'
      })
	  .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('ContactCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('ListsCtrl', ["$scope", "$http", function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		
	$scope.currentLists = JSON.parse('[' +
		'{ "ListeNom":"semaine" , "ListeArticle":[' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"sprite" , "Quantitee":"2" },' +
		'{ "ArticleNom":"Peter" , "Quantitee":"3" } ] },' +
		'{ "ListeNom":"weekend" , "ListeArticle":[' +
		'{ "ArticleNom":"chips" , "Quantitee":"4" },' +
		'{ "ArticleNom":"pesto" , "Quantitee":"5" },' +
		'{ "ArticleNom":"thon" , "Quantitee":"6" } ] },' +
		'{ "ListeNom":"soiree" , "ListeArticle":[' +
		'{ "ArticleNom":"jager" , "Quantitee":"7" },' +
		'{ "ArticleNom":"rhum" , "Quantitee":"8" },' +
		'{ "ArticleNom":"vodka" , "Quantitee":"9" } ] } ]'); 

	$scope.mesart ;
	$scope.show1 = true;
	$scope.show2 = false;
	
	$scope.replace = function(choosenList) {
			$scope.mesart = choosenList.ListeArticle;
				console.log($scope.mesart);
			$scope.show1 = false;
			$scope.show2 = true;
				
	};
	
	$scope.return = function() {
		$scope.show1 = true;
		$scope.show2 = false;

	};
	
  }]);

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('ArticlesCtrl', ["$scope", "$http", function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.result;
	$scope.infoArticles = "Informations article";
	$scope.photoArticle = "";
	$scope.ingrediants = "informations non renseignés";
	
	
	$scope.show1 = true;
	$scope.show2 = false;
	$scope.infoArticlesM = "Informations article mobile";
	$scope.ingrediantsM = "informations non renseignés mobile";
	
	$scope.searchproduct = function(barcode) {
		$http({
			method: 'GET',
			url: 'https://fr.openfoodfacts.org/api/v0/produit/'+barcode+'.json'
		}).then(function successCallback(data) {
			console.log(data);
			$scope.result = data;
			$scope.infoArticles = data.data.product.brands + " " + data.data.product.product_name_fr;
			$scope.photoArticle = data.data.product.image_url
			if(data.data.product.ingredients.length!=0){$scope.ingrediants = "";}
			for(let i=0; i<data.data.product.ingredients.length; i++){
				$scope.ingrediants += data.data.product.ingredients[i].text +", ";
			}
		}, function errorCallback(data) {
			alert("error");
		});
	};
	
	$scope.searchproductM = function(barcode) {
		$http({
			method: 'GET',
			url: 'https://fr.openfoodfacts.org/api/v0/produit/'+barcode+'.json'
		}).then(function successCallback(data) {
			console.log(data);
			$scope.result = data;
			$scope.infoArticlesM = data.data.product.brands + " " + data.data.product.product_name_fr;
			if(data.data.product.ingredients.length!=0){$scope.ingrediantsM = "";}
			for(let i=0; i<data.data.product.ingredients.length; i++){
				$scope.ingrediantsM += data.data.product.ingredients[i].text +", ";
			}
			$scope.show1 = false;
			$scope.show2 = true;
		}, function errorCallback(data) {
			alert("error");
		});
	};
	
	$scope.return2 = function() {
		$scope.show1 = true;
		$scope.show2 = false;
	};
  }]);

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('SigninCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name aieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aieApp
 */
angular.module('aieApp')
  .controller('LoginCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('app1App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/articles.html',
    "<div id=\"contenu\"> <div class=\"mainPagePC\"> <div id=\"blocGauche\"> Rechercher un article <div id=\"centrale\"> <div> <label for=\"cbarre\">Code barre</label> <input ng-model=\"champ\" type=\"text\" id=\"cbarre\" name=\"cbarre\" placeholder=\"Code barre..\"> <input type=\"submit\" value=\"OK\" ng-click=\"searchproduct(champ)\"> </div> <br> <div id=\"scanner\"> <input type=\"scanner\" value=\"Scanner\"> </div> </div> </div> <div id=\"blocDroite\"> <p style=\"text-decoration:underline\">{{infoArticles}}</p> <div id=\"photoArticle\"> <img class=\"ban\" src=\"{{photoArticle}}\" alt=\"\"> </div> <div id=\"centraled\"> <p style=\"text-decoration:underline\">Ingrédients : </p>{{ingrediants}} </div> </div> </div> <div class=\"mainPageM\"> <div id=\"mobile\" ng-show=\"show1\"> Rechercher un article <div> <div> <label for=\"cbarre\">Code barre</label> <input ng-model=\"champ2\" type=\"text\" id=\"cbarre\" name=\"cbarre\" placeholder=\"Code barre..\"> <button id=\"rechercher\" ng-click=\"searchproductM(champ2)\" style=\"cursor: pointer\">Rechercher</button> </div> <br> <div class=\"input-file-container\"> <input class=\"input-file\" id=\"my-file\" type=\"file\" capture=\"camera\" accept=\"image/*\"> <label for=\"my-file\" class=\"input-file-trigger\" tabindex=\"0\">Scanner</label> <button id=\"rechercher\" ng-click=\"searchproductM(champ2)\" style=\"cursor: pointer\">GO</button> </div> </div> </div> <div ng-show=\"show2\"> <p style=\"text-decoration:underline\">{{infoArticlesM}}</p> <div> <p style=\"text-decoration:underline\">Ingrédients : </p>{{ingrediantsM}} </div> <button id=\"rechercher\" ng-click=\"return2()\" style=\"cursor: pointer\">Retour</button> </div> </div> </div> <link rel=\"stylesheet\" href=\"styles/articles.css\">"
  );


  $templateCache.put('views/contact.html',
    "<div class=\"mainPagePC\"> <p id=\"lead\">Une idée, une suggestion ? faites en nous part !</p> <div style=\"width: 50%; float:left\"> <a href=\"https://www.facebook.com/\" target=\"_blank\"> <div style=\"width: 50%; margin:auto; border:1px solid black\"> <div style=\"width: 50%; margin:auto; float:top\"> <img id=\"little\" src=\"images/facebook.png\"> </div> <div style=\"float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black\"> <p>FACEBOOK</p> </div> </div> </a> <div style=\"margin-bottom:25px\"></div> <a href=\"https://www.gmail.com/\" target=\"_blank\"> <div style=\"width: 50%; margin:auto; border:1px solid black\"> <div style=\"width: 50%; margin:auto; float:top\"> <img id=\"little\" src=\"images/mail.png\"> </div> <div style=\"float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black\"> <p>MAIL</p> </div> </div> </a> </div> <div style=\"width: 50%; float:right\"> <a href=\"https://www.twitter.com/\" target=\"_blank\"> <div style=\"width: 50%; margin:auto; border:1px solid black\"> <div style=\"width: 50%; margin:auto; float:top\"> <img id=\"little\" src=\"images/twitter.png\"> </div> <div style=\"float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black\"> <p>TWITTER</p> </div> </div> </a> <div style=\"margin-bottom:25px\"></div> <a href=\"https://www.youtube.com/\" target=\"_blank\"> <div style=\"width: 50%; margin:auto; border:1px solid black\"> <div style=\"width: 50%; margin:auto; float:top\"> <img id=\"little\" src=\"images/youtube.png\"> </div> <div style=\"float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black\"> <p>YOUTUBE</p> </div> </div> </a> </div> </div> <div class=\"mainPageM\"> <div style=\"width: 80%; margin:auto\"> <a href=\"https://www.facebook.com/\" target=\"_blank\"> <div style=\"border:1px solid black; position:relative; padding-left: 5em; overflow:hidden\"> <div style=\"width: 5em; margin:auto; position:absolute; left:0px; height: 100%\"> <img id=\"little\" src=\"images/facebook.png\"> </div> <div style=\"text-align:center; text-decoration:none\"> <p>FACEBOOK</p> </div> </div> <div style=\"margin-bottom:25px\"></div> <div style=\"border:1px solid black; position:relative; padding-left: 5em; overflow:hidden\"> <div style=\"width: 5em; margin:auto; position:absolute; left:0px; height: 100%\"> <img id=\"little\" src=\"images/twitter.png\"> </div> <div style=\"text-align:center; text-decoration:none\"> <p>TWITTER</p> </div> </div> <div style=\"margin-bottom:25px\"></div> <div style=\"border:1px solid black; position:relative; padding-left: 5em; overflow:hidden\"> <div style=\"width: 5em; margin:auto; position:absolute; left:0px; height: 100%\"> <img id=\"little\" src=\"images/mail.png\"> </div> <div style=\"text-align:center; text-decoration:none\"> <p>MAIL</p> </div> </div> <div style=\"margin-bottom:25px\"></div> <div style=\"border:1px solid black; position:relative; padding-left: 5em; overflow:hidden\"> <div style=\"width: 5em; margin:auto; position:absolute; left:0px; height: 100%\"> <img id=\"little\" src=\"images/youtube.png\"> </div> <div style=\"text-align:center; text-decoration:none\"> <p>YOUTUBE</p> </div> </div> </a> </div> </div> <link rel=\"stylesheet\" href=\"styles/contact.css\">"
  );


  $templateCache.put('views/lists.html',
    "<div class=\"mainPagePC\"> <div id=\"touteslistes\"> <div id=\"touteslistes2\"> <div ng-repeat=\"lists in currentLists\" style=\"border:1px solid black; cursor: pointer\"> <div ng-click=\"replace(lists)\" style=\"text-align:center; text-decoration:none\"> <p>{{lists.ListeNom}}</p> </div> </div> </div> </div> <div id=\"descriptliste\"> <div id=\"touteslistes2\"> <table border=\"1\" style=\"width:100%\"> <thead> <tr> <th><p style=\"text-align:center\">Nom Article</p></th> <th><p style=\"text-align:center\">Quantité</p></th> </tr> </thead> <tbody ng-repeat=\"articles in mesart\"> <tr> <!-- autant de ligne que d'articles --> <td> {{articles.ArticleNom}} </td> <td style=\"text-align:center\"> {{articles.Quantitee}} </td> </tr> </tbody> </table> </div> </div> </div> <div class=\"mainPageM\"> <div id=\"touteslistes\"> <div id=\"touteslistes2\" ng-show=\"show1\"> <div ng-repeat=\"lists in currentLists\" style=\"border:1px solid black; cursor: pointer\"> <div ng-click=\"replace(lists)\" style=\"text-align:center; text-decoration:none\"> <p>{{lists.ListeNom}}</p> </div> </div> </div> </div> <div id=\"descriptliste\" ng-show=\"show2\"> <input type=\"submit\" value=\"Retour\" ng-click=\"return()\"> <div id=\"touteslistes2\"> <table border=\"1\" style=\"width:100%\"> <thead> <tr> <th><p style=\"text-align:center\">Nom Article</p></th> <th><p style=\"text-align:center\">Quantité</p></th> </tr> </thead> <tbody ng-repeat=\"articles in mesart\"> <tr> <!-- autant de ligne que d'articles --> <td> {{articles.ArticleNom}} </td> <td style=\"text-align:center\"> {{articles.Quantitee}} </td> </tr> </tbody> </table> </div> </div> </div> <link rel=\"stylesheet\" href=\"styles/lists.css\">"
  );


  $templateCache.put('views/login.html',
    "<link rel=\"stylesheet\" href=\"styles/login.css\"> <div id=\"contenu\"> <label for=\"pseudo\">Pseudo</label> <input type=\"text\" id=\"pseudo\" name=\"pseudo\" placeholder=\"Pseudo..\"> <label for=\"mdp\">Mot de passe</label> <input type=\"password\" id=\"mdp\" name=\"mdp\" placeholder=\"mot de passe..\"> <input type=\"submit\" value=\"Connexion\"> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"mainPagePC\"> <p id=\"lead\">Bienvenue sur FoodFactory (desktop)</p> <p>Grace a food factory vous pourrez creer votre liste de course grace au scan ou a la recherche d'article, vous pourrez aussi avoir des informations nutritionelles de vos produits !</p> <div id=\"all\"> <div class=\"sub\"> <iframe align=\"center\" src=\"https://www.youtube.com/embed/W49LVs-V2-I\" frameborder=\"0\"></iframe> </div> </div> <p>API : OpenFoodFacts </p> </div>  <div class=\"mainPageM\"> <p id=\"lead\">Bienvenue sur FoodFactory (mobile)</p> <div style=\"width: 49.6%; float:left; border-right:1px solid black\"> <div style=\"width: 100%; border-bottom:1px solid black\"> <a href=\"#!/articles\"><img class=\"mbutton\" src=\"images/article.png\"></a> </div> <div style=\"width: 100%; border-top:1px solid black\"> <a href=\"#!/login\"><img class=\"mbutton\" src=\"images/login.png\"></a> </div> </div> <div style=\"width: 49.6%; float:right; border-left:1px solid black\"> <div style=\"width: 100%; border-bottom:1px solid black\"> <a href=\"#!/lists\"><img class=\"mbutton\" src=\"images/list.png\"></a> </div> <div style=\"width: 100%; border-top:1px solid black\"> <a href=\"#!/contact\"><img class=\"mbutton\" src=\"images/contact.png\"></a> </div> </div> <div class=\"button\"> <a style=\"text-decoration:none\" href=\"#!/signin\"><p id=\"butt\">S'inscrire</p></a> </div> </div>"
  );


  $templateCache.put('views/signin.html',
    "<link rel=\"stylesheet\" href=\"styles/account.css\"> <div id=\"contenu\"> <label for=\"pseudo\">Pseudo</label> <input type=\"text\" id=\"pseudo\" name=\"pseudo\" placeholder=\"Pseudo..\"> <label for=\"mdp\">Mot de passe</label> <input type=\"password\" id=\"mdp\" name=\"mdp\" placeholder=\"mot de passe..\"> <label for=\"mdpc\">Mot de passe Confirmation</label> <input type=\"password\" id=\"mdpc\" name=\"mdpc\" placeholder=\"mot de passe..\"> <label for=\"country\">Pays</label> <select id=\"country\" name=\"country\"> <option value=\"allemagne\">Allemagne</option> <option value=\"belgique\">Belgique</option> <option value=\"canada\">Canada</option> <option value=\"espagne\">Espagne</option> <option value=\"france\">France</option> <option value=\"italie\">Italie</option> <option value=\"usa\">USA</option> </select> <label for=\"mel\">Adresse Mail</label> <input type=\"text\" id=\"mel\" name=\"mel\" placeholder=\"adresse mail..\"> <input type=\"submit\" value=\"Valider\"> </div>"
  );

}]);

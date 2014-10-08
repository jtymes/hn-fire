// Code goes here
var app = angular.module('hn-fire', ['firebase', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/front');

	$stateProvider.state('front', {
		url: '/front',
		templateUrl: 'views/frontpage.html',
		controller: 'FrontPageCtrl'
	});

	$stateProvider.state('itemdetail', {
		url: '/item/:itemId',
		templateUrl: 'views/itemDetail.html',
		controller: 'ItemDetailCtrl'
	});
}]);

app.constant('API_URL', "https://hacker-news.firebaseio.com/v0/");
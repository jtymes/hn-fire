// Code goes here
var app = angular.module('hn-fire', ['firebase', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/front');

	$stateProvider.state('front', {
		url: '/front',
		templateUrl: 'views/frontpage.html',
		controller: 'HNFront'
	});

	$stateProvider.state('itemdetail', {
		url: '/item/:itemId',
		templateUrl: 'views/itemDetail.html',
		controller: 'HNComment'
	});
}]);
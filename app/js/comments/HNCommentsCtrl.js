angular.module('hn-fire').controller('ItemDetailCtrl', ['$scope', '$firebase', '$stateParams', 'API_URL', function($scope, $firebase, $stateParams, API_URL) {
	var itemRef = new Firebase(API_URL + 'item/' + $stateParams.itemId);

	var item = $firebase(itemRef).$asObject();

	item.$loaded().then(function() {
		$scope.item = item;
	});

}]);
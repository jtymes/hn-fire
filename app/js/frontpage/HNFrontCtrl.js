app.controller('HNFront', ['$scope', '$firebase', '$filter', function($scope, $firebase, $filter) {
	var baseUrl = "https://hacker-news.firebaseio.com/v0/";

	var topStoriesUrl = baseUrl + 'topstories';
	var topStoriesRef = new Firebase(topStoriesUrl);
	var itemUrl = baseUrl + 'item/';

	$scope.topStories = $firebase(topStoriesRef).$asArray();


	var descSort = function(a, b) {
		if (a.score > b.score) {
			return -1;
		} else if (a.score < b.score) {
			return 1;
		} else {
			return 0;
		}
	};

	$scope.stories = [];
	var loadStoryInfo = function(stories) {
		_.each(stories, function (storyId) {
			var ref = new Firebase(itemUrl + storyId.$value);
			$firebase(ref).$asObject().$loaded().then(function (story) {
//				console.log(story);
				$scope.stories.push(story);
			});
			// var x = 5;
			// console.log(story);
			// $scope.stories.push($firebase(ref).$asObject().$value);
		});
	};

	$scope.topStories.$loaded().then(loadStoryInfo);

}]);

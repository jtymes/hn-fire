app.directive('storyListItem', ['$timeout', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			story: '='
		},
		templateUrl: 'views/storyListItem.html',
		link: function(scope, element, attrs) {
			scope.$watch('story.score', function(newVal, oldVal) {
				if (newVal && (newVal !== oldVal)) {
					console.log('refreshed story ' + scope.story.id);
					scope.refreshedClass = 'story-list-item-refreshed';
					$timeout(function() {
						scope.refreshedClass = '';
					}, 1000);
				}
			});
		}
	}
}]);
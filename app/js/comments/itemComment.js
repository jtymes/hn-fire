app.directive('itemComment', ['API_URL', '$firebase', '$compile', '$sce', function(API_URL, $firebase, $compile, $sce) {
	return {
		restrict: 'E',
		scope: {
			commentId: '='
		},
		link: function(scope, element, attrs) {
			scope.trusted = function(text) {
				return $sce.trustAsHtml(text);
			}
			var commentRef = new Firebase(API_URL + 'item/' + scope.commentId);

			scope.comment = $firebase(commentRef).$asObject();
			scope.comment.$loaded().then(function(comment) {
				if (comment.kids.length) {
					element.append('<div style="padding-left:30px;"><item-comment ng-repeat="itemId in comment.kids" comment-id="itemId"></item-comment></div>');
					$compile(element.contents())(scope);
				}
			})
		},
		templateUrl: 'views/comment.html'
	}
}]);


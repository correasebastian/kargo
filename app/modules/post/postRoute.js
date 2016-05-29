

(function () {
	'use strict';


	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # PostRoute
	* Routes of the app
	*/

	angular.module('kargo.post')
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider
				
				.state('home.postList', {
					url: '/posts',
					template: '<post-list detail-state="home.postDetail" param="id"></post-list>'
					// templateUrl: 'app/modules/post-list/list.html'
				})
				.state('home.postDetail', {
					url: '/posts/:id',
					templateUrl: 'app/modules/post/post-detail/post-detail.html',
					controller: 'PostDetailController',
					controllerAs: 'vm'
				})

		}]);

})();
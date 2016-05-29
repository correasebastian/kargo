

(function () {
	'use strict';


	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

	angular.module('kargo.postList')
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider
				.state('home', {
					url: '',
					abstract: true,
					templateUrl: 'app/modules/post-list/home.html'
				})
				.state('home.postList', {
					url: '/posts',
					template: '<post-list detail-state="home.postDetail" param="id"></post-list>'
					// templateUrl: 'app/modules/post-list/list.html'
				})
				.state('home.postDetail', {
					url: '/posts/:id',
					templateUrl: 'app/modules/post-detail/post-detail.html',
					controller: 'PostDetailController',
					controllerAs: 'vm'
				})

		}]);

})();
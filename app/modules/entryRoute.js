

(function () {
	'use strict';


	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # PostRoute
	* Routes of the app
	*/

	angular.module('kargo')
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider
				.state('home', {
					url: '',
					abstract: true,
					templateUrl: 'app/modules/home.html'
				})
				

		}]);

})();
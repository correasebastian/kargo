(function () {
	'use strict';

	/**
	* @ngdoc configuration file
	* @name app.config:config
	* @description
	* # Config and run block
	* Configutation of the app
	*/


	angular
		.module('kargo')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdDateLocaleProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdDateLocaleProvider) {

		$locationProvider.hashPrefix('');

		$mdDateLocaleProvider.parseDate = function (dateString) {
			var m = moment(dateString, 'DD-MM-YYYY', true);
			return m.isValid() ? m.toDate() : new Date(NaN);
		};

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


		$urlRouterProvider
			.otherwise('/posts');

	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

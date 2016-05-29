(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('kargo', [
		'ngResource',
		'ngAria',
		 'ngMaterial',
		'ngMdIcons',
		'ngMessages',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ngLetterAvatar',
		'ui.router',
		// 'kargo.home',
		'kargo.post',
		'kargo.tracker'
	]);

})();

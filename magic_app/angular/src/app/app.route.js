'use strict';

angular.module('magicApp')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'app/components/dashboard/views/template.html'
			});

		$urlRouterProvider.otherwise('/dashboard');
	});
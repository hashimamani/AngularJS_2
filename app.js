/*
 * Cytonn Technologies
 *
 * @author: Hashim Amani <hamani@cytonn.com>
 *
 * Project: Angular JS.
 *
 */

angular
	.module('App', ['ui.router', 'ngAnimate'])

	.config(function($stateProvider, $urlRouterProvider)
	{
		$stateProvider
			.state('tab1', {
				name: 'tab1',
				url: '/tab1',
				template: '<div class="tab tab1"><p>This is one of my templates </p></div>'
			})

			.state('tab2', {
				name: 'tab2',
				url: '/tab2',
				template: '<div class="tab tab2"><p>This is another template</p></div>'
			})

			.state('tab3', {
				name: 'tab3',
				url: '/tab3',
				template: '<div class="tab tab3"><p>Yet another one!</p></div>'
			})

			.state('tab4', {
				name: 'tab4',
				url: '/tab4',
				template: '<div class="tab tab4"><p>and another one!</p></div>'
			});
	})

	.controller('Controller1', function( $scope, $window, $state )
	{
		$scope.transition = 'slide-left';
		$scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
		$scope.currentIndex = -1;
		$scope.maxIndex = $scope.tabs.length;
		$scope.left = false;

		next();

		function next()
		{
			$scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
			var name = $scope.tabs[$scope.currentIndex];
			$state.go( name );
		}

		$scope.left = function()
		{
			$scope.transition = 'slide-left';
			next();
		}

		$scope.right = function()
		{
			$scope.transition = 'slide-right';
			next();
		}

		$scope.top = function()
		{
			$scope.transition = 'slide-top';
			next();
		}

		$scope.bottom = function()
		{
			$scope.transition = 'slide-bottom';
			next();
		}
	})
;
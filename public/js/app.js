
var app = angular.module('prodManagement', ['ui.router', 'LocalStorageModule']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) {
    var mainRoute = {
			name: 'products',
			url: '/products/:id',
			template: '<store></store>',
			resolve: {
				
			},
			params: {
				id: {
					value: null,
					dynamic: true,
					squash: true
				}
			}
	};

	localStorageServiceProvider.setPrefix('CodeValue');

	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('products');
	$stateProvider.state(mainRoute);
});


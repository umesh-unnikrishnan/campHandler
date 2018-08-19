var application = angular.module('application', ['ngRoute', 'ngMessages', 'chart.js', 'ui.materialize', 'ngAnimate', 'ngMaterial', 'ngMaterial','ngCookies']);

application.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
    when('/dashboard/:campId', {
        templateUrl: 'dashboard.html',
        controller: 'dashboardController'
    }).when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
    }).when('/mainAdmin', {
        templateUrl: 'mainAdmin.html',
        controller: 'mainAdminController'
    }).when('/campAdmin', {
        templateUrl: 'campAdmin.html',
        controller: 'campAdminController'
    }).otherwise({
        templateUrl: 'dashboard.html',
        controller: 'dashboardController'
    });
}]);

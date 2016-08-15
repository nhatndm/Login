var approute = angular.module('approute',[]);

approute.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'home.html',
            controller: 'homecontroler'
        })
        .state('about',{
            url :'/about',
            templateUrl: 'About.html',
            controller: 'aboutcontroller'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
    $locationProvider.hashPrefix('!');
});
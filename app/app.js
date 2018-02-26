var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .state('history', {
            url: '/history',
            templateUrl: 'views/history.html',
            controller: 'historyController'
        });
    //add script tags for controllers to index.html

});

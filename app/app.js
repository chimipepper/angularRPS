var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        });
    //add script tags for controllers to index.html

});

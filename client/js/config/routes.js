var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
        $routeProvider
        .when('/events', {
                templateUrl: 'static/partials/events.html'
        })
        .otherwise({
                redirectTo:('/events')
        })
})









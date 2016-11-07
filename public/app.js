

angular.module('moviequotesapp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: 'QuoteController',
      templateUrl : "templates/moviequote.html"
    })
    .when("/new", {
      controller: 'NewQuoteController',
      templateUrl : "templates/newquote.html"
    })
  })




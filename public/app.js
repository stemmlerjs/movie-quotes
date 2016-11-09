

angular.module('moviequotesapp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
      controller: 'QuoteController',
      templateUrl : "templates/moviequote.html"
    })
    .when("/new", {
      controller: 'NewQuoteController',
      templateUrl : "templates/newquote.html"
    })

     // by doing this, we make the browser use HTML5 and History API, no hashtags
    $locationProvider.html5Mode(true);
  })




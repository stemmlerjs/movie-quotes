angular.module('moviequotesapp')
  .factory('Quotes', function($http) {
        
    // create a new object
    var quoteFactory = {};

    // create a quote (public)
    quoteFactory.createQuote = function(quote) {
        return $http.post(config.BASE_URL + '/api/quote/new/', quote);
    }

    // Return all quotes
    quoteFactory.getAll = function(){
        return $http.get(config.BASE_URL + '/api/quote/');
    }

    // Return quote factory
    return quoteFactory;

})     
angular.module('moviequotesapp')
  .factory('Quotes', function($http) {
        
    // create a new object
    var quoteFactory = {};

    // create a quote (public)
    quoteFactory.createQuote = function(quote) {
        return $http.post('/api/quote/new/', quote);
    }

    // Return all quotes
    quoteFactory.getAll = function(){
        return $http.get('/api/quote/');
    }

    // Return quote factory
    return quoteFactory;

})     
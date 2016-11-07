

  angular.module('moviequotesapp')
  .controller('QuoteController', QuoteController)
  .controller('NewQuoteController', NewQuoteController)

  /*
  * Quote Controller
  * - Display quotes
  */

  function QuoteController($scope, Quotes) {
    Quotes.getAll()
      .then(function(response) {
        console.log(response)
      })

    $scope.quotes = [{
      id: 1,
      quote: 'You talkin to me?',
      fromMovie: 'Taxi Driver',
      submittedBy: 'Bobby'
    }]
    $scope.currentQuoteIndex = 0;
    $scope.nextQuote = function() {}
    $scope.rateQuote = function() {}
  }

  /*
  * NewQuoteController
  * - Create New Quotes
  */

  function NewQuoteController($scope) {
    $scope.newQuote = {
      quote: '',
      fromMovie: '',
      submittedBy: ''
    }
    $scope.submit = function() {

    }
  }




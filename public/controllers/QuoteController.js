

  angular.module('moviequotesapp')
  .controller('QuoteController', QuoteController)
  .controller('NewQuoteController', NewQuoteController)

  /*
  * Quote Controller
  * - Display quotes
  */

  function QuoteController($scope, Quotes) {
    $scope.mod = Math.ceil(Math.random() * 3)
    $scope.currentQuoteIndex = 0;

    $scope.initGetAllQuotes = function() {
      Quotes.getAll()
      .then(function(response) {
        $scope.quotes = shuffle(response.data.quotes)
      })
    }

    /*
    * shuffle
    * 
    * Shuffles all the elements in the array using the Fisher-Yates Shuffle
    * algorithm.
    *
    * @param - Array - array
    */

    $scope.nextQuote = function() {
      $scope.currentQuoteIndex++
      if($scope.currentQuoteIndex > $scope.quotes.length - 1) {
        $scope.currentQuoteIndex = 0;
      }
    }

    /*
    * shuffle
    * 
    * Shuffles all the elements in the array using the Fisher-Yates Shuffle
    * algorithm.
    *
    * @param - Array - array
    */

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    $scope.rateQuote = function() {}
    $scope.initGetAllQuotes()
  }

  /*
  * NewQuoteController
  * - Create New Quotes
  */

  function NewQuoteController($scope, Quotes) {
    $scope.newQuote = {
      quoteText: '',
      fromMovie: '',
      submittedBy: ''
    }

    $scope.onSuccessfulSubmit = function() {
      $scope.newQuote = {
        quoteText: '',
        fromMovie: '',
        submittedBy: ''
      }
    }

    $scope.submit = function() {
      Quotes.createQuote($scope.newQuote)
        .then(function(result) {
          if(result.data.success) {
            $scope.onSuccessfulSubmit()
          }
        })
    }
  }




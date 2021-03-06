module.exports = function(app, express, Quote, ROOT_DIR) {

  var express = require('express')
  var apiRouter = express.Router();
  var path = require('path')

  apiRouter.post('/quote/new', function(req, res) {
    
    var quote = new Quote({
      quoteText: req.body.quoteText,
      fromMovie: req.body.fromMovie,
      submittedBy: req.body.submittedBy
    })

    quote.save(function(err, quote) {
      if (err) {
        res.json({
          success: false,
          message: 'An error occurred while trying to create this quote',
          error: err
        })
      } else {
        res.json({
          success: true,
          message: 'Successfully created new quote',
          quote: quote
        })
      }
    })
  })

  apiRouter.get('/quote', function(req, res) {
    Quote.find({}, function(err, quotes) {
      res.json({
        quotes: quotes,
        success: true
      })
    })
  })

  app.use('/api', apiRouter)

  app.get('*', function(req, res) {
    res.sendFile(path.join(ROOT_DIR + '/public/index.html'))
  })

}
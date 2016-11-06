module.exports = function(app) {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://10.0.2.137/moviequotes')
  var Quote = require('./models').Quote

  require('./routes')(app, Quote)
}


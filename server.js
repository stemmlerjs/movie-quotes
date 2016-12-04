var fs = require('fs');

var express = require('express')
var morgan = require('morgan')
var color = require('color')
var path = require('path')
var FileStreamRotator = require('file-stream-rotator')
var bodyParser = require('body-parser')

// Startup Express, Logging
var app = express()
app.listen(80)
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
initLogging()

// require('./app/routes')(app)
// Start application
require('./app')(app, express, __dirname)

function initLogging() {
  var logDirectory = path.join(__dirname, 'log')

  // ensure log directory exists
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

  // create a rotating write stream
  var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
  })

  // setup the logger
  app.use(morgan('combined', {stream: accessLogStream}))
}
//

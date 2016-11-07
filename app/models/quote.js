var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = Schema({
    quoteText: { type: String, required: true, index: { unique: false }},
    fromMovie: { type: String, required: true, index: { unique: false }},
    submittedBy: { type: String, required: true, index: { unique: false }}
})


module.exports = mongoose.model('Quote', QuoteSchema)
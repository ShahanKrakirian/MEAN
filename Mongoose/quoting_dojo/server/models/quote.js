const mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    quote: {type: String, required: true, minlength: 10}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
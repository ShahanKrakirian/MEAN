const mongoose = require('mongoose');
const quotes = require('./../controllers/quotes');

module.exports = function(app){
    app.get('/', function(request, response){
        quotes.index(request,response);
    });
    
    app.post('/quotes/process', function(request, response){
        quotes.quotes_process(request,response);
    });
    
    app.get('/quotes', function(request, response){
        quotes.quotes(request,response);
    })
}
const flash = require('express-flash');
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: (request,response) => {
        response.render('index');
    },
    quotes_process: (request, response)=>{
        var quote = new Quote(request.body);
        quote.save(function(err){
            if(err){
                for (var key in err.errors){
                    request.flash('form', err.errors[key].message);
                }
                response.redirect('/');
            }
        response.redirect('/quotes');
        });
    },
    quotes: (request, response)=>{
        quotes_dict = {}
        Quote.find({}).sort('-createdAt').exec(function(err,quotes){
            quotes_dict['quotes'] = quotes
            console.log(quotes_dict);
            response.render('quotes', quotes_dict);
        });
    }
}
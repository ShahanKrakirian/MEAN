var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('form')
});

app.post('/results', function(request,response){
    context = {
        'name':request.body.name,
        'location':request.body.location,
        'language':request.body.language,
        'comment':request.body.comment
    }
    response.render('results', context)
})


app.listen(6789);
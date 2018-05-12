var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secretpassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.get('/', function(request, response){
    if (!request.session.count){
        request.session.count = 1;
    }
    else {
        request.session.count += 1;
    }
    response.render('counter', request.session);
});

app.get('/add2', function(request, response){
    request.session.count += 1;
    response.redirect('/');
});

app.get('/destroy', function(request, response){
    request.session.destroy();
    response.redirect('/');
})


app.listen(6789);
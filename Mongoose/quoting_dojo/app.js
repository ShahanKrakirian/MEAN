var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var mongoose = require('mongoose');
var session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

require('./server/config/mongoose');

require('./server/config/routes')(app);

var server = app.listen(6789, function(){
    console.log('listening 6789');
});


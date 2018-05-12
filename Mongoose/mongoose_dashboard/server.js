const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const mongoose = require('mongoose');
app.use(session({
    secret: 'Shahansrandomsecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;

require('./server/models/meerkat');
mongoose.Promise = global.Promise;
require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(6789, function(){
    console.log('Local host listening on port: 6789.')
});
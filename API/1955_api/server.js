const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const mongoose = require('mongoose');

app.use(flash());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

require('./server/config/mongoose');

require('./server/config/routes')(app);

var server = app.listen(6789, () => {
    console.log("Listening on 6789");
})
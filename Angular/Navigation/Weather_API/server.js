const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const mongoose = require('mongoose');

app.use(flash());
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public/'));

// require('./server/config/mongoose');

// require('./server/config/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

var server = app.listen(6789, () => {
    console.log("Listening on 6789");
})
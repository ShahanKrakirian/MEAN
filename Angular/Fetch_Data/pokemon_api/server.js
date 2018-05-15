const express = require('express');
const app = express();

app.use(express.static( __dirname + '/public/dist/public/'));

var server = app.listen(6789, () => {
    console.log("Listening on 6789");
})
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var socket = require('socket.io');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

var server = app.listen(6789, function(){
    console.log('listening 6789');
});

var io = socket(server);

io.on('connection', function(socket){
    console.log('Socket connection made!')

    socket.on('survey_data', function(data){
        display = {
            'display':"<p>You emitted the following information to the server: { name: " + data.name + ", location: " + data.location + ", language: " + data.language + ", comment: " + data.comment + "}</p><br><p>Your lucky number is: " + Math.floor(Math.random() * 100) + 1 + "</p>"
        }
        socket.emit('show_me', display);
    })
})


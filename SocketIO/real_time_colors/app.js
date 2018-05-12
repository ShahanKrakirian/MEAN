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

current_color = '';

io.on('connection', function(socket){
    console.log('Socket connection made!')
    color = {
        'current_color': current_color
    }
    socket.emit('initialize', color);

    socket.on('green', function(){
        io.emit('change_green');
        current_color = 'green'
    })
    socket.on('blue', function(){
        io.emit('change_blue');
        current_color = 'blue'
    })
    socket.on('pink', function(){
        io.emit('change_pink');
        current_color = 'pink'
    })

})


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

var count = 0;
io.on('connection', function(socket){
    data = {
        'count':count,
    }
    //Start counter.
    io.emit('initialize', data);

    //If someone clicks the epic button.
    socket.on('add', function(){
        count += 1;
        data = {
            'count':count,
        }
        io.emit('add_response', data);
    })

    //If someone resets the count.
    socket.on('reset', function(){
        count = 0;
        data = {
            'count':count,
        }
        io.emit('reset_action', data);
    })

})
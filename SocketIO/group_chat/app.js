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

var all_users = {};
var messages = [];

io.on('connection', function(socket){
    console.log('Socket connection made!')

    socket.emit('initialize', {'messages':messages});

    //Handle name, send message to all connected
    socket.on("name_declaration", function(data){
        var message = "<p class='italics'>"+data.name+" has entered the chat.</p>";
        var welcome = {
            'welcome':message
        }
        messages.push(message)
        io.emit('receiving_name', welcome);
    });
    
    //Receiving name, add to all_user list, increment counter, send data to ejs.
    socket.on('send_llama_count', function(data){
        llama_counter = data.llama_counter;
    });

    //Receiving message
    socket.on('message_written', function(data){
        var message = '<p>' + data.user + ": " + data.message + '</p>'
        messages.push(message);
        io.emit('message_post', {'messages':message});
    })

})


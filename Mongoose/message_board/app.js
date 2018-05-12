const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'Shahansrandomsecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Include your name'], minlength: 1},
    comment: {type: String, required: [true, 'Include a comment'], minlength: 10},
}, {timestamps: true});

const messageSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Include your name'], minlength: 1},
    message: {type: String, required: [true, 'Include a message'], minlength: 10},
    comments: [commentSchema]
}, {timestamps: true});

const Comment = mongoose.model('comments', commentSchema);
const Message = mongoose.model('messages', messageSchema);

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

// rendering pages
app.get('/', function(request, response){
    Message.find({}, function(err, data){
        console.log(data[0]._id);
        response.render('index', {messages:data});
    })
})

// post 
app.post('/create-message', function(request, response){
    var message = new Message(request.body);
    message.save(function(err){
        if (err){
            for (var key in err.errors){
                request.flash('message_error', err.errors[key].message);
            }
        }
        response.redirect('/')
    })
})

app.post('/create-comment/:message_id', function(request, response){
    Comment.create(request.body, function(err, comment_added){
        if (err){
            for (var key in err.errors){
                request.flash('comment_error', err.errors[key].message);
            }
            response.redirect('/');
        }
        else{
            Message.update({_id: request.params.message_id}, {$addToSet: {comments: comment_added}}, function(err){
                if (err){
                    console.log("Errors.");
                }
                response.redirect('/');
            })
        }
    })
})

app.listen(6789, function(){
    console.log('Local host listening on port: 6789.')
})
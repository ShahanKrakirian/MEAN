const express = require('express');
const session = require('express-session');
const app = express();
const bcrypt = require('bcrypt');
const validator = require('validator');
const validate = require('mongoose-validate');


app.use(session({
    secret: 'Shahansrandomsecretkey'
}))

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/dojo_secrets');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
    birthday: {type: Date, required: true},
    secrets: [{
            secret: {type: String}, 
            comments: 
                [{
                    comment: {type: String}
                }]
            }]
}, {timestamps: true});

mongoose.model("User", userSchema);
var User = mongoose.model("User");

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

// rendering pages
app.get('/', (request, response)=>{
    if (request.session._id){
        response.redirect('/secrets');
    }
    response.render('index');
})

// post 
app.post('/register', (request, response)=>{
    var button = false; 
    if (request.body.password.length < 1 || request.body.confirm_password < 1){
        request.flash('user', "Password too short");
        button = true;
    }
    if (request.body.password !== request.body.confirm_password){
        request.flash('user', "Passwords don't match.");
        button = true;
    }
    if (request.body.first_name.length < 1){
        request.flash('user', "First name is required.");
        button = true;
    }
    if (request.body.last_name.length < 1){
        request.flash('user', "Last name is required.");
        button = true;
    }
    if (validator.isEmail(request.body.email) === false){
        request.flash('user', "Enter a valid email.");
        button = true;
    }
    if (!validator.isBefore(request.body.birthday)){
        request.flash('user', "Enter a valid date.");
    }
    if (button){
        response.redirect('/')
    }
    else {
        bcrypt.hash(request.body.password, 10).then(hashed_password => {
            //create statement
            User.create({
                email: request.body.email,
                first_name: request.body.first_name, 
                last_name: request.body.last_name,
                password: hashed_password,
                birthday: request.body.birthday,
            }, (err, user) => {
                request.session._id = user._id;
                response.redirect('/secrets');
            })
        }).catch(error => {
            console.log("Error occurred");
            response.redirect('/');
        })
    }
})

app.post('/login', (request, response)=>{
    User.findOne({email:request.body.email},(err, user)=>{
        if(user){
            bcrypt.compare(request.body.password, user.password).then(result => {
                if(result){
                    request.session._id = user._id;
                    response.redirect('/secrets');
                }
                else{
                    request.flash('user', "Passwords don't match.");
                    response.redirect('/');
                }
            }).catch(error => {
                console.log("Something went wrong.");
            })
        }
        else{
            request.flash('user', "No email match.");
            response.redirect('/');
        }
    })
})

app.post('/secret/create', (request,response) => {
    if (request.body.secret.length < 1){
        request.flash('secret', "Come on, share a secret. You know you want to.");
        response.redirect('/secrets');
    }
    else{
        User.findOne({_id:request.session._id}, (err, user)=>{
            if (err){
                for (var x in err.errors){
                    request.flash('secret', err.errors[x].message);
                }
            }
            User.update({_id:request.session._id}, {$push: {secrets: {secret: request.body.secret, comments:[]}}}, (err)=> {
                if (err){
                    for (var x in err.errors){
                        request.flash('secret', err.errors[x].message);
                    }
                }
                else{
                    response.redirect('/secrets');
                }
            })
        })
    }
})

app.get('/logout', function(request, response){
    request.session.destroy(err =>{
        response.redirect('/')
    });
})

app.get('/secrets', function(request, response){
    //Not logged in
    if (!request.session._id){
        response.redirect('/');
    }
    //Get all users "users"
    User.find({}, (err, users) =>{
        if (err){
            console.log("Mama we made it");
            for (var x in err.errors){
                request.flash('secret', err.errors[x].message);
                response.render('/secrets');
            }
        }
        response.render('secrets', {users:users, current_user_id: request.session._id});
    })
})

app.get('/secret/:secret_id', (request, response)=>{
    User.findOne({"secrets._id":request.params.secret_id}, (err,user) => {
        var secret = user.secrets.id(request.params.secret_id);
        console.log("This is the secret:", secret);
        if (err){
            for (var x in err.errors){
                request.flash('secret', err.errors[x].message);
                response.redirect('/secrets');
            }
        }
        response.render('secret', {secret:secret});
    })
})

app.post('/comment/create/:secret_id', (request, response)=> {
    if (request.body.comment.length < 1) {
        request.flash('comment', "Your comment isn't long enough.")
        response.redirect('/secret/' + request.params.secret_id);
    }
    else{
        var user = User.findOne({'secrets._id':request.params.secret_id}, (err, user)=>{
            console.log(user);
            var secret = user.secrets.id(request.params.secret_id);
            console.log(secret);
            secret.comments.push({comment:request.body.comment});
            user.save();
            response.redirect('/secret/' + request.params.secret_id);
        })
    }
})

app.get('/secret/delete/:secret_id', (request,response)=>{
    var user = User.findOne({'secrets._id':request.params.secret_id}, (err, user)=>{
        secret = user.secrets.id(request.params.secret_id);
        user.save((err)=>{
            console.log("Some bullshit");
            response.redirect('/secrets');
        })
    })
})

app.listen(6789, function(){
    console.log('Local host listening on port: 6789.')
})
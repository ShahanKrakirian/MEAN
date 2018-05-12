const express = require('express');
const session = require('express-session');
const app = express();
const bcrypt = require('bcrypt');
const validator = require('validator');
const validate = require('mongoose-validate');


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
mongoose.connect('mongodb://localhost/login_reg');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    password: {type: String, required: true},
    birthday: {type: Date, required: true}
}, {timestamps: true});

mongoose.model("User", userSchema);
var User = mongoose.model("User");

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

// rendering pages
app.get('/', (request, response)=>{
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
            })
        }).catch(error => {
            console.log("Error occurred");
            response.redirect('/');
        })
    }
})

app.post('/login', (request, response)=>{
    var button = false;
    User.findOne({email:request.body.email},function(err, user){
        if(user){
            bcrypt.compare(request.body.password, user.password).then(result => {
                if(result){
                    console.log("Success!")
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

app.listen(6789, function(){
    console.log('Local host listening on port: 6789.')
})
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

//Cats 
app.get('/cats', function(request, response){
    response.render('cats');
})

//Me
app.get('/me', function(request,response){
    var me = {
        'name': 'Me',
        'favorite_food': 'Burritos',
        'colors': ['Brown', 'White']
    };
    response.render('cat_profile', {cat: me});
})

//Magic
app.get('/magic', function(request, response){
    var magic = {
        'name': 'Magic',
        'favorite_food': 'Disappearing Mice',
        'colors': ['Black', 'Nocolor']
    };
    response.render('cat_profile', {cat:magic});
})

//Grumpy
app.get('/grumpy', function(request, response){
    var grumpy = {
        'name': "Grumpy",
        'favorite_food': "Tacos",
        'colors': ['Gray', 'White']
    };
    response.render('cat_profile', {cat:grumpy});
})

app.listen(6789, function(){
    console.log("Running on 6789.");
})

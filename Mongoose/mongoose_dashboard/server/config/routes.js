const mongoose = require('mongoose');
const mongeese = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/', function(req, res){
        mongeese.index(req,res);
    })
    app.get('/meerkat/new', function(req, res){
        mongeese.meerkat_new(req, res);
    })
    app.get('/meerkat/:id', function(req, res){
        mongeese.meerkat_id(req, res);
    })
    app.get('/meerkat/edit/:id', function(req, res){
        mongeese.edit_meerkat_id(req, res);
    })
    app.post('/add_meerkat', function(req, res){
        mongeese.add_meerkat(req, res);
    });
    app.post('/edit_meerkat/:id', function(req, res){
        mongeese.edit_meerkat_id(req, res);
    });
    app.get('/meerkat/destroy/:id', function(req, res){
        mongeese.meerkat_destroy_id(req, res);
    })
}
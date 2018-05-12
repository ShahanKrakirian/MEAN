const mongoose = require('mongoose');
const Meerkat = mongoose.model('Meerkat');

module.exports = {

    index: (req, res)=> {
        Meerkat.find({}, function(err, meerkats){
            console.log(err);
            console.log(meerkats);
            res.render('index', {meerkats: meerkats});
        }).sort('-createdAt');
    },

    meerkat_new: (req, res)=>{
        res.render('new_meerkat');
    },

    meerkat_id: (req, res)=>{
        Meerkat.findOne({_id: req.params.id}, function(err, meerkats){
            if(err) {
                res.redirect('/');
            };
            res.render('meerkat_info', {meerkats: meerkats});
        });
    },

    meerkat_edit_id: (req, res)=>{
        Meerkat.findOne({_id: req.params.id}, function(err, meerkats){
            if(err) {
                res.redirect('/');
            };
            res.render('meerkat_edit', {meerkats: meerkats});
        });
    },

    add_meerkat: (req, res)=>{
        var new_meerkat = new Meerkat(req.body);
        new_meerkat.save(function(err){
            if(err){
                console.log("wat", err);
                for(var key in err.errors){
                    req.flash('meerkat_reg', err.errors[key].message);
                }
                res.redirect('/meerkat/new');
            } else{
                res.redirect('/');
            }
        });
    },

    edit_meerkat_id: (req,res)=>{
        Meerkat.update({_id: req.params.id}, req.body, function(err, result){
            if(err){
                res.redirect('/meerkat/edit/'+req.params.id);
            }else{
                res.redirect('/meerkat/'+req.params.id);
            }
        });
    },

    meerkat_destroy_id: (req, res)=>{
        Meerkat.remove({_id: req.params.id}, function(err){
            res.redirect('/');
        });
    }

}
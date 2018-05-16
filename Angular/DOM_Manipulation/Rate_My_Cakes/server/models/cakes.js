const mongoose = require('mongoose');

var cakeSchema = new mongoose.Schema({
    baker: {type: String, require: [true, "Who baked this cake?"]},
    image: {type: String, require: [true, "What does this cake look like?"]},
    ratings: [{
        stars: {type: Number},
        comment: {type: String}
    }]
}, {timestamps: true});

module.exports = mongoose.model('Cakes', cakeSchema);
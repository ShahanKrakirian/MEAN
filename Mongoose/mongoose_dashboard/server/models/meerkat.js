const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    favoriteFood: {type: String, required: true, minlength: 1},
    age: {type: Number, required: true, min:1, max:24}
}, {timestamps: true});

const Meerkat = mongoose.model('Meerkat', module.exports);
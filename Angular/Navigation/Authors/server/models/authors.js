const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Who is this author?"], minlength: [3, "Author must be at least 3 characters."]},
}, {timestamps: true});

module.exports = mongoose.model('Authors', authorSchema);
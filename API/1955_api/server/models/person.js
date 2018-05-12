const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Person', personSchema);
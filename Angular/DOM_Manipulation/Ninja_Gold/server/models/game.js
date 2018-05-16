const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {type: String},
    score: {type: Number},
    game_code: {type: Number}
}, {timestamps: true});

module.exports = mongoose.model('Games', gameSchema);
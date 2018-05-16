const mongoose = require('mongoose');
const Game = require('./../models/game');

module.exports = {

    farm: (request, response) => { 
        var num = Math.floor(Math.random() * 3) + 2
        var message = "You dug up " + num + " gold!";
        response.json({value: num, message: message});
    },
    
    cave: (request, response) => { 
        var num = Math.floor(Math.random() * 5) + 5
        var message = "You found " + num + " gold!";
        response.json({value: num, message: message});
    },

    house: (request, response) => {
        var num = Math.floor(Math.random() * 8) + 7
        var message = "Grandma gave you " + num + " gold!";
        response.json({value: num, message: message});
    },

    casino: (request, response) => {
        var num = Math.floor(Math.random() * 201) - 100
        if (num >= 0){
            var message = "Lucky you! You won " + num + " gold!";
        } else {
            var message = "That's the way the cookie crumbles... " + num + " gold.";
        }
        response.json({value:num, message: message});
    },

    save_game: (request, response) => {
        random_id = Math.floor(Math.random() * 90000) + 10000;
        Game.create({name: request.params.name, score: request.params.gold, game_code: random_id}, (err, game) => {
            if (err) {
                console.log('Encountered errors.')
            }
            else {
                response.json(game);
            }
        })
    },

    load_game: (request, response) => {
        Game.findOne({game_code: request.params.game_id}, (error, game) => {
            if (error) {
                response.json("Bad game code.")
            }
            else {
                response.json(game);
            }
        })
    },

    high_scores: (request, response) => {
        Game.find({}, (error, games) => {
            if (error) {
                response.json("Bad response.")
            }
            else {
                response.json(games);
            }
        }).sort({score: -1})
    }
}
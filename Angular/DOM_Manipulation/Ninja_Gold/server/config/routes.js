const mongoose = require('mongoose');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/api/farm', (request, response) => {
        controller.farm(request, response);
    })
    app.get('/api/cave', (request, response) => {
        controller.cave(request, response);
    })
    app.get('/api/house', (request, response) => {
        controller.house(request, response);
    })
    app.get('/api/casino', (request, response) => {
        controller.casino(request, response);
    })
    app.get('/api/save/:gold/:name', (request, response) => {
        controller.save_game(request, response);
    })
    app.get('/api/load/:game_id', (request, response) => {
        controller.load_game(request, response);
    })
    app.get('/api/high_scores', (request, response) => {
        controller.high_scores(request, response);
    })
}
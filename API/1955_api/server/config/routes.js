const mongoose = require('mongoose');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/', (request, response) => {
        controller.index(request,response);
    })
    
    app.get('/new/:name', (request, response) => {
        controller.new_name(request, response);
    })

    app.get('/remove/:name', (request, response) => {
        controller.remove_name(request, response);
    })

    app.get('/:name', (request, response) => {
        controller.name(request, response);
    })
}
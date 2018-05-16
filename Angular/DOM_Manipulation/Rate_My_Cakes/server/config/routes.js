const mongoose = require('mongoose');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/api/cakes', (request, response) => {
        controller.index(request,response);
    })

    // app.get('/api/cakes/:cake_id', (request, response) => {
    //     controller.tasks_task(request,response);
    // })
    
    app.post('/api/cakes/new', (request, response) => {
        controller.new_cake(request, response);
    })

    app.post('/api/cakes/add_review/:cake_id', (request, response) => {
        controller.add_review(request, response);
    })

    // app.put('/api/cakes/update/:cake_id', (request, response) => {
    //     controller.update_task(request, response);
    // })

    // app.delete('/api/cake/delete/:cake_id', (request, response) => {
    //     controller.delete_task(request, response);
    // })
}
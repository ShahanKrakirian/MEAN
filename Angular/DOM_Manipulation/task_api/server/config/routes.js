const mongoose = require('mongoose');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/api/index', (request, response) => {
        controller.index(request,response);
    })

    app.get('/api/tasks/:task_id', (request, response) => {
        controller.tasks_task(request,response);
    })
    
    app.post('/api/tasks', (request, response) => {
        controller.new_task(request, response);
    })

    app.put('/api/update/:_id', (request, response) => {
        controller.update_task(request, response);
    })

    app.delete('/api/delete/:task', (request, response) => {
        controller.delete_task(request, response);
    })
}
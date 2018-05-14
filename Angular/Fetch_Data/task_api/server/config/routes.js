const mongoose = require('mongoose');
const controller = require('./../controllers/tasks');

module.exports = (app) => {
    app.get('/index', (request, response) => {
        controller.index(request,response);
    })

    app.get('/tasks/:task', (request, response) => {
        controller.tasks_task(request,response);
    })
    
    app.post('/tasks', (request, response) => {
        controller.new_task(request, response);
    })

    app.put('/update/:task', (request, response) => {
        controller.update_task(request, response);
    })

    app.delete('/delete/:task', (request, response) => {
        controller.delete_task(request, response);
    })
}
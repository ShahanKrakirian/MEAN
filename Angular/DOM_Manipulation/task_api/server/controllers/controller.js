const mongoose = require('mongoose');
const Task = require('./../models/task');

module.exports = {

    index: (request, response) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                console.log("Error encountered while retrieving tasks.");
                response.redirect('/api/index');
            }
            else{
                response.json(tasks);
            }
        })
    },

    tasks_task: (request, response) => {
        Task.findOne({_id: request.params.task_id}, (err, task) => {
            if (err) {
                console.log("Errors encountered while finding task.");
                response.redirect('/api/index');
            }
            else {
                response.json({task: task});
            }
        })
    },

    new_task: (request, response) => {
        Task.create(request.body, (err, task) => {
            if (err) {
                console.log("Error encountered while creating task.");
                response.redirect('/api/index');
            }
            else{
                response.redirect('/api/index');
            }
        })
    },

    update_task: (request, response) => {
        Task.update({_id: request.params._id}, {title: request.body.title, description: request.body.description}, (err, task) => {
            if (err) {
                console.log("Error encountered while updating task.");
                response.redirect('/api/index');
            }
            else{
                response.json(task);
            }
        })
    },

    delete_task: (request, response) => {
        Task.findOneAndRemove({_id: request.params.task}, (err, task) => {
            if (err) {
                console.log("Error encountered while deleting task.");
                response.redirect('/api/index');
            }
            else{
                response.json(task);
            }
        })
    }
}
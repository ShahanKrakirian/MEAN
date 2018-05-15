const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

    index: (request, response) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                console.log("Error encountered while retrieving tasks.");
                response.redirect('/');
            }
            else{
                response.json({all_tasks: tasks});
            }
        })
    },

    tasks_task: (request, response) => {
        Task.findOne({_id: request.params.task_id}, (err, task) => {
            if (err) {
                console.log("Errors encountered while finding task.");
                response.redirect('/');
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
                response.redirect('/');
            }
            else{
                response.redirect('/');
            }
        })
    },

    update_task: (request, response) => {
        Task.update({title: request.body.title}, (err, task) => {
            if (err) {
                console.log("Error encountered while updating task.");
                response.redirect('/');
            }
            else{
                response.json({task_updated: task});
            }
        })
    },

    delete_task: (request, response) => {
        Task.findOneAndRemove({_id: request.params.task}, (err, task) => {
            if (err) {
                console.log("Error encountered while deleting task.");
                response.redirect('/');
            }
            else{
                response.json({task_removed: task});
            }
        })
    }
}
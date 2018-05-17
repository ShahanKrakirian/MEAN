const mongoose = require('mongoose');
const path = require('path');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/api/authors', (request, response) => {
        controller.index(request,response);
    })

    app.get('/api/authors/:id', (request, response) => {
        controller.authors_author(request,response);
    })
    
    app.post('/api/authors/new', (request, response) => {
        controller.new_author(request, response);
    })

    app.put('/api/authors/update/:id', (request, response) => {
        controller.update_author(request, response);
    })

    app.delete('/api/author/delete/:id', (request, response) => {
        controller.delete_author(request, response);
    })
    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"));
      });

}
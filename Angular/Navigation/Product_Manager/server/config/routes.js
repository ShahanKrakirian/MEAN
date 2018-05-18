const mongoose = require('mongoose');
const path = require('path');
const controller = require('./../controllers/controller');

module.exports = (app) => {
    app.get('/api/products', (request, response) => {
        controller.index(request,response);
    })

    app.get('/api/products/:id', (request, response) => {
        controller.products_product(request,response);
    })
    
    app.post('/api/products/new', (request, response) => {
        controller.new_product(request, response);
    })

    app.put('/api/products/update/:id', (request, response) => {
        controller.update_product(request, response);
    })

    app.delete('/api/products/delete/:id', (request, response) => {
        controller.delete_product(request, response);
    })
    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"));
      });

}
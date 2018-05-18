const mongoose = require('mongoose');
const Product = require('./../models/products');

module.exports = {

    index: (request, response) => {
        Product.find({}, (err, products) => {
            if (err) {
                console.log("Error encountered while retrieving products.");
                response.redirect('/api/index');
            }
            else{
                console.log("Successfully found all products.");
                response.json(products);
            }
        })
    },

    products_product: (request, response) => {
        Product.findOne({_id: request.params.id}, (err, product) => {
            if (err) {
                console.log("Errors encountered while finding product.");
                response.redirect('/api/index');
            }
            else {
                console.log("Sucessfully found product.");
                response.json(product);
            }
        })
    },

    new_product: (request, response) => {
        console.log(request.body);
        Product.create(request.body, (err, product) => {
            if (err) {
                response.json(err);
            }
            else{
                console.log("Successfully created product.");
                response.json(product);
            }
        })
    },

    update_product: (request, response) => {
        Product.findOne({_id: request.params.id}, (errors, product) => {
            if (errors) {
                console.log("Couldn't find that product in our database");
            }
            else {
                console.log("Okay, got the product to update...");
                Product.update(product, {title: request.body.title, price: request.body.price, image_url: request.body.image_url}, (errors, product) => {
                    if (errors) {
                        response.json({error: "Product title must be at least 4 characters."});
                    }
                    else {
                        console.log("Updated the product!");
                        response.json(product);
                    }
                })
            }
        })
    },

    delete_product: (request, response) => {
        Product.findOneAndRemove({_id: request.params.id}, (err, product) => {
            if (err) {
                console.log("Error encountered while deleting product.");
                response.redirect('/api/index');
            }
            else{
                console.log("Deleted the product!");
                response.json(product);
            }
        })
    }
}
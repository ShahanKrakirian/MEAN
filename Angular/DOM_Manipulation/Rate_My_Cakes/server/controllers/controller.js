const mongoose = require('mongoose');
const Cake = require('./../models/cakes');

module.exports = {

    index: (request, response) => {
        Cake.find({}, (errors, cakes) => {
            if (errors) {
                console.log("Error getting all cakes.");
            }
            else {
                console.log("Got all cakes successfully!");
                response.json(cakes);
            }
        })
    },

    new_cake: (request, response) => {
        Cake.create(request.body, (errors, cake) => {
            if (errors) {
                console.log("Error creating cake.");
            }
            else{ 
                console.log("Cake created successfully!");
                response.json(cake);
            }
        })
    },

    add_review: (request, response) => {
        Cake.findOne({_id: request.params.cake_id}, (errors, cake) => {
            if (errors) {
                console.log("Couldn't find that cake in our database");
            }
            else {
                console.log("Okay, got the cake to update...");
                Cake.update(cake, {$push: {ratings: {stars: request.body.stars, comment: request.body.comment}}}, (errors, cake) => {
                    if (errors) {
                        console.log("Couldn't update the cake.");
                    }
                    else {
                        console.log("Updated the cake!");
                        response.json(cake);
                    }
                })
            }
        })
    }

    //get all > get
    //get one > get
    //create > post 
    //update > put
    //delete > delete

}
const mongoose = require('mongoose');
const Author = require('./../models/authors');

module.exports = {

    index: (request, response) => {
        Author.find({}, (err, authors) => {
            console.log(authors);
            if (err) {
                console.log("Error encountered while retrieving authors.");
                response.redirect('/api/index');
            }
            else{
                console.log("Successfully found all authors.");
                response.json(authors);
            }
        })
    },

    authors_author: (request, response) => {
        Author.findOne({_id: request.params.id}, (err, author) => {
            if (err) {
                console.log("Errors encountered while finding author.");
                response.redirect('/api/index');
            }
            else {
                console.log("Sucessfully found author.");
                response.json(author);
            }
        })
    },

    new_author: (request, response) => {
        console.log(request.body);
        Author.create(request.body, (err, author) => {
            if (err) {
                response.json({error: "Author name must be at least 3 characters."});
            }
            else{
                console.log("Successfully created author.");
                response.json(author);
            }
        })
    },

    update_author: (request, response) => {
        Author.findOne({_id: request.params.id}, (errors, author) => {
            if (errors) {
                console.log("Couldn't find that author in our database");
            }
            else {
                console.log("Okay, got the author to update...");
                Author.update(author, {name: request.body.name}, (errors, author) => {
                    if (errors) {
                        response.json({error: "Author name must be at least 3 characters."});
                    }
                    else {
                        console.log("Updated the author!");
                        response.json(author);
                    }
                })
            }
        })
    },

    delete_author: (request, response) => {
        Author.findOneAndRemove({_id: request.params.id}, (err, author) => {
            if (err) {
                console.log("Error encountered while deleting author.");
                response.redirect('/api/index');
            }
            else{
                console.log("Deleted the author!");
                response.json(author);
            }
        })
    }
}
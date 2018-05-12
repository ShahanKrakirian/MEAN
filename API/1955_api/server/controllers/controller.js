const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {

    index: (request, response) => {
        Person.find({}, (err, people) => {
            if (err) {
                console.log("Something went wrong retrieving people.");
                response.redirect('/');
            }
            else {
                response.json({all_people: people});
            }
        })
    }, 

    new_name: (request, response) => {
        Person.create({name: request.params.name}, (err, person) => {
            if(err){
                console.log("Something went wrong while creating the person.");
                response.redirect('/');
            }
            else{
                response.json({message: "Success", data: person})
            }
        })
    },

    remove_name: (request, response) => {
        Person.findOneAndRemove({name: request.params.name}, (err, person) => {
            if (err) {
                console.log("Something went wrong removing the user from the database.");
                response.redirect('/');
            }
            else{ 
                response.json({removed_user: person});
            }
        })
    },

    name: (request, response) => {
        Person.findOne({name: request.params.name}, (err, person) => {
            if (err) {
                console.log("Sorry, user was not found or an error occurred.");
                response.redirect('/');
            }
            else{
                response.json({user: person});
            }
        })
    }
}
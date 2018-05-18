const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: [4, "Product title must be at least 4 characters."]},
    price: {type: String, required: [true, "What is the price of this product?"]},
    image_url: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Products', productSchema);
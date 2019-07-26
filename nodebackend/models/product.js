const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    number:String,
    description:String,
    images: [{
        name : String,
        url: String
    }]
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
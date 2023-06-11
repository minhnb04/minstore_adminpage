const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Product = new Schema({
    productName: String,
    brand: String,
    classify: String,
    color: String,
    quantity: Number,
    specifications: Number,
    lastUpdated: Date,
    images: String,
    avatarImage: String,
    status: Boolean

})

module.exports = mongoose.model('Prduct', Product)
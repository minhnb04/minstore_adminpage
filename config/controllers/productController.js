
const User = require('../../models/product');
const fs = require('fs');

class ProductController {

    index(req, res){
        res.render('products', { title: 'Products Management' })
    }

    addProduct(req, res, next) {
        res.render('products', { title: 'Add Products' })
    }

    updateProduct(req, res, next) {
        res.render('products', { title: 'Update Products' })
    }

    deleteProduct(req, res, next) {
        res.render('products', { title: 'Delete Products' })
    }

    searchProduct(req, res, next) {
        res.render('products', { title: 'Search Products' })
    }
}

module.exports = new ProductController;
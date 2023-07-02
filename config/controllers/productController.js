
const Product = require('../../models/product');
const fs = require('fs');

class ProductController {

    async index(req, res){
        await Product.find()
            .then((products) => {
                var lsProduct = products.map(function (product) {
                    var date = product.lastUpdated
                    date = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
                    return {
                        _id: product._id,
                        productName: product.productName,
                        brand: product.brand,
                        classify: product.classify,
                        color: product.color,
                        quantity: product.quantity,
                        specifications: product.specifications,
                        memory:product.memory,
                        price:product.price,
                        lastUpdated: date,
                        productImages: product.productImages,
                        status: product.status,
                    }
                })
                var productsJSON = JSON.stringify(lsProduct)
                res.render('products', { title: 'Products Management', lsProduct: lsProduct, productsJSON: productsJSON})
            })
            .catch((error) => {
                next(error)
            })


        res.render('products', { title: 'Products Management' })
    }

    async addProduct(req, res, next) {

        if(req.body.productName
            && req.body.brand
            && req.body.classify
            && req.body.color
            && req.body.quantity
            && req.body.specifications
            && req.body.memory
            && req.body.price
            && req.body.lastUpdated
            && req.files
        ){

            const images = req.files.map(file => file.filename);

            var product = new Product(
                {
                    productName: req.body.productName,
                    brand: req.body.brand,
                    classify: req.body.classify,
                    color: req.body.color,
                    quantity: req.body.quantity,
                    specifications: req.body.specifications,
                    memory:req.body.memory,
                    price:req.body.price,
                    lastUpdated: req.body.lastUpdated,
                    productImages: images,
                    status: true
                })
            try {
                await product.save()
                    .then((result) => {
                        console.log('Product created:', result);
                        res.redirect('/products')
                    })
                    .catch((error) => {
                        console.error('Error creating user:', error);
                        res.json(error)
                    });
            }catch (err) {
                console.error(err);
            }
        }else {
            console.log("Yêu cầu nhập đầy đủ thông tin!")
        }



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
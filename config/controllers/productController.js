
class ProductController {

    index(req, res){
        res.render('products', { title: 'Products Management' })
    }

}

module.exports = new ProductController;
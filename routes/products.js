var express = require('express');
var router = express.Router();

var productController = require('../config/controllers/productController')

router.get('/', productController.index);

module.exports = router;

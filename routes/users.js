
var express = require('express');
var router = express.Router();

const userController = require('../config/controllers/userController') 


router.get('/', userController.index);

router.post('/add-user', userController.addUser);



module.exports = router;


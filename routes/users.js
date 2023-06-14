
var express = require('express');
var router = express.Router();

const userController = require('../config/controllers/userController') 


router.get('/', userController.index);

router.post('/add-user', userController.addUser);
router.post('/update/:id', userController.updateUser);

router.post('/delete/:id', userController.deleteUser);


module.exports = router;


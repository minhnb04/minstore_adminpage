
var express = require('express');
var router = express.Router();

const userController = require('../config/controllers/userController') 

router.get('/', userController.index);

router.post('/add-user', userController.addUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

router.get('/search', userController.searchUser);


module.exports = router;


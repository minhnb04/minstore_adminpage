const User = require('../../models/user')
const moment = require('moment');

class UserController {

    index(req, res, next) {

        User.find()
            .then((users) => {
                console.log(users);
                res.render('users', { title: 'User Management', users })
            })
            .catch((error) => {
                next(error)
            })

    }

    addUser(req, res, next) {
        
        var user = new User(
            {
                employeeCode: req.body.employeeCode,
                fullname: req.body.fullname,
                username: req.body.username,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                birthday: req.body.birthday,
                gender: req.body.gender,
                avatarImage: 'images/marie.jpg',
                role: 2,
                status: true,
            }
        )


        user.save()
            .then((result) => {
                console.log('User created:', result);
                res.redirect('/users')
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                res.json(error)
            });
    }

    updateUser(req, res, next) {

        var user = new User(
            {
                employeeCode: req.body.employeeCode,
                fullname: req.body.fullname,
                username: req.body.username,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                birthday: req.body.birthday,
                gender: req.body.gender,
                avatarImage: 'images/marie.jpg',
                role: 2,
                status: true,
            }
        )


        user.save()
            .then((result) => {
                console.log('User created:', result);
                res.redirect('/users')
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                res.json(error)
            });
    }


}

module.exports = new UserController;
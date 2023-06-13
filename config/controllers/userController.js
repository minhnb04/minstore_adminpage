const user = require('../../models/user');
const User = require('../../models/user')
const moment = require('moment');

class UserController {

    index(req, res, next) {

        User.find()
            .then((users) => {
                var lsUser = users.map(function (user) {
                    var date = user.birthday.toISOString()
                    var date = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
                    return {
                        _id: user._id,
                        employeeCode: user.employeeCode,
                        fullname: user.fullname,
                        username: user.username,
                        password: user.password,
                        role: user.role,
                        phoneNumber: user.phoneNumber,
                        email: user.email,
                        avatarImage: user.avatarImage,
                        birthday: date,
                        gender: user.gender,
                        status: user.status
                    }
                })
                console.log(lsUser);
                res.render('users', { title: 'User Management', lsUser: lsUser })
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


    deleteUser(req, res, next) {
        user.deleteOne({ _id: req.params.id })
        .then(()=> res.redirect('/users'))
        .catch(next)
    }
}

module.exports = new UserController;
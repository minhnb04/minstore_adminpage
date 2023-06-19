
const User = require('../../models/user');

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
                var usersJSON = JSON.stringify(lsUser)
                res.render('users', { title: 'User Management', lsUser: lsUser, usersJSON: usersJSON})
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
        User.updateOne({_id: req.params.id},req.body)
        .then(()=> res.redirect('/users'))
        .catch(next)
        res.redirect('/users')
    }

    deleteUser(req, res, next) {
        User.deleteOne({ _id: req.params.id })
        .then(()=> res.redirect('/users'))
        .catch(next)
    }

    searchUser(req, res, next) {
        res.json('Search')
    }

}

module.exports = new UserController;
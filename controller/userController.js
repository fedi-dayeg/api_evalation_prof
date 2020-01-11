const {User} = require('../Models/User');

function getAllUseres(response) {
    User.find({}).exec(function (err, users) {
        if (!err) response.send({
            success: true,
            users: users
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getById(request, response) {
    let id = request.params.id;
    User.findById(id).exec(function (err, user) {
        if (!err) response.send({
            success: true,
            user: user,
        });
        else response.send({
            success: false,
            message: 'No user Found'
        })
    })
}

function AddUser(request, response) {
    let newUser = new User(request.body);
    try {
        newUser.save().then(function (user) {
            response.send({
                success: true,
                user: user
            }).catch(function (err) {
                response.send({
                    success: false,
                    error: err,
                })
            })
        })
    } catch (e) {
        response.send({
            success: false
        })
    }
}

function removeUser(request, response) {
    let id = request.params.id;
    User.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'User removed'});
        else response.send({success: false, message: 'Error of remove the user'})
    })
}

module.exports = {getAllUseres, getById, AddUser, removeUser};




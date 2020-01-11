const {UserAuth} = require('../Models/User');

function getAllUseres(response) {
    UserAuth.find({}).exec(function (err, users) {
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
    let id = request.id;
    UserAuth.findById(id).exec(function (err, user) {
        if (!err) response.send({
            success: true,
            usere: user,
        });
        else response.send({
            success: false,
            message: 'Error in Add User'
        })
    })
}

function AddUser(request, response) {
    let newUser = new UserAuth(request.body);
    newUser.save().then(function (user) {
        response.send({
            success: true,
            user: user
        }).catch(function (err) {
            response.send({
                success: false,
                error: err,
                message: 'Error in the Add User'
            })
        })
    })
}

module.exports = {getAllUseres, getById, AddUser};




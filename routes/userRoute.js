const express = require('express');

const userController = require('../controller/userController');

const {getAllUseres, getById, AddUser, removeUser, login} = require('../controller/userController');

const userRoute = express.Router();

userRoute.route('/')
    .get(function (request, response) {
        getAllUseres(response);
    })

    .post(function (request, response) {
        AddUser(request, response)
    });


userRoute.route('/:id')
    .get(function (request, response) {
        getById(request, response)
    })
    .delete(function (request, response) {
        removeUser(request, response);
    });

userRoute.route('/login')
    .post(function (request, response) {
        login(request, response);
    });

/*userRoute.post('/login',userController.login);*/
module.exports = {userRoute};

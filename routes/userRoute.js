const express = require('express');

const {getAllUseres, getById, AddUser, removeUser} = require('../controller/userController');

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

module.exports = {userRoute};

const express = require('express');

const {getAllUseres, getById, AddUser} = require('../controller/userController');

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
    });

module.exports = {userRoute};

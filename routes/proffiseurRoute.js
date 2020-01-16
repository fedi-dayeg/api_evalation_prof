const express = require('express');


const {getAllProffiseur, getProffiseurById, AddProffiseur, removeProffiseur} = require('../controller/profController');

const ProffiseuRoute = express.Router();

ProffiseuRoute.route('/')
    .get(function (request, response) {
        getAllProffiseur(response);
    })

    .post(function (request, response) {
        AddProffiseur(request, response)
    });


ProffiseuRoute.route('/:id')
    .get(function (request, response) {
        getProffiseurById(request, response)
    })
    .delete(function (request, response) {
        removeProffiseur(request, response);
    });


/*userRoute.post('/login',userController.login);*/
module.exports = {ProffiseuRoute};

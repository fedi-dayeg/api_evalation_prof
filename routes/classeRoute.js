const express = require('express');


const {getAllClasses, getClasseById, AddClasse, removeClasse} = require('../controller/classeController');

const ClasseRoute = express.Router();

ClasseRoute.route('/')
    .get(function (request, response) {
        getAllClasses(response);
    })

    .post(function (request, response) {
        AddClasse(request, response)
    });


ClasseRoute.route('/:id')
    .get(function (request, response) {
        getClasseById(request, response)
    })
    .delete(function (request, response) {
        removeClasse(request, response);
    });


/*userRoute.post('/login',userController.login);*/
module.exports = {ClasseRoute};

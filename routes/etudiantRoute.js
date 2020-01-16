const express = require('express');

const EtudiantController = require('../controller/userController');

const {getAllEtudiants, getEtudiantById, AddEtudiant, removeEtudiant, loginEtudiant} = require('../controller/etudiantController');

const EtudiantRoute = express.Router();

EtudiantRoute.route('/')
    .get(function (request, response) {
        getAllEtudiants(response);
    })

    .post(function (request, response) {
        AddEtudiant(request, response)
    });


EtudiantRoute.route('/:id')
    .get(function (request, response) {
        getEtudiantById(request, response)
    })
    .delete(function (request, response) {
        removeEtudiant(request, response);
    });

EtudiantRoute.route('/login')
    .post(function (request, response) {
        loginEtudiant(request, response);
    });

/*userRoute.post('/login',userController.login);*/
module.exports = {EtudiantRoute};

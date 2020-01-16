const express = require('express');


const {getAllEvaluation, getEvaluationById, AddEvaluation, removeEvaluation} = require('../controller/evamuationController');

const EvaluationRoute = express.Router();

EvaluationRoute.route('/')
    .get(function (request, response) {
        getAllEvaluation(response);
    })

    .post(function (request, response) {
        AddEvaluation(request, response)
    });


EvaluationRoute.route('/:id')
    .get(function (request, response) {
        getEvaluationById(request, response)
    })
    .delete(function (request, response) {
        removeEvaluation(request, response);
    });


/*userRoute.post('/login',userController.login);*/
module.exports = {EvaluationRoute};

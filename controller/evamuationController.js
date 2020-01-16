const {Evaluation} = require('../Models/Evaluation');

function getAllEvaluation(response) {
    Evaluation.find({}).populate("etudaints","nom prenom").exec(function (err, evaluations) {
        if (!err) response.send({
            success: true,
            evaluations: evaluations
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getEvaluationById(request, response) {
    let id = request.params.id;
    Evaluation.findById(id).exec(function (err, evaluations) {
        if (!err) response.send({
            message: true,
            evaluations: evaluations,
        });
        else response.send({
            success: false,
            message: 'No evaluations Found'
        })
    })
}



function AddEvaluation(request, response) {
    let newEvaluation = new Evaluation(request.body);
    try {
        newEvaluation.save().then(function (evaluations) {
            response.send({
                success: true,
                evaluations: evaluations
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

function removeEvaluation(request, response) {
    let id = request.params.id;
    Evaluation.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'Evaluation removed'});
        else response.send({success: false, message: 'Error of remove the Evaluation'})
    })
}


module.exports = {getAllEvaluation, getEvaluationById, AddEvaluation, removeEvaluation};




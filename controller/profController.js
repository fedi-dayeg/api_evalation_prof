const {Proffiseur} = require('../Models/Prof');

function getAllProffiseur(response) {
    Proffiseur.find({}).exec(function (err, proffiseurs) {
        if (!err) response.send({
            success: true,
            proffiseurs: proffiseurs
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getProffiseurById(request, response) {
    let id = request.params.id;
    Proffiseur.findById(id).exec(function (err, proffiseurs) {
        if (!err) response.send({
            message: true,
            proffiseurs: proffiseurs,
        });
        else response.send({
            success: false,
            message: 'No proffiseurs Found'
        })
    })
}



function AddProffiseur(request, response) {
    let newProffiseur = new Proffiseur(request.body);
    try {
        newProffiseur.save().then(function (proffiseur) {
            response.send({
                success: true,
                proffiseur: proffiseur
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

function removeProffiseur(request, response) {
    let id = request.params.id;
    Proffiseur.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'proffiseur removed'});
        else response.send({success: false, message: 'Error of remove the proffiseur'})
    })
}


module.exports = {getAllProffiseur, getProffiseurById, AddProffiseur, removeProffiseur};




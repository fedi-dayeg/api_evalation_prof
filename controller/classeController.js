const {Classe} = require('../Models/Classe');

function getAllClasses(response) {
    Classe.find({}).populate("etudiants","nom prenom").populate("proffiseurs","nom prenom").exec(function (err, classes) {
        if (!err) response.send({
            success: true,
            classes: classes
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getClasseById(request, response) {
    let id = request.params.id;
    Classe.findById(id).populate("etudiants","nom prenom").populate("proffiseurs","nom prenom").exec(function (err, classes) {
        if (!err) response.send({
            message: true,
            classes: classes,
        });
        else response.send({
            success: false,
            message: 'No classe Found'
        })
    })
}


function AddClasse(request, response) {
    let newClasse = new Classe(request.body);
    try {
        newClasse.save().then(function (classes) {
            response.send({
                success: true,
                classes: classes
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

function removeClasse(request, response) {
    let id = request.params.id;
    Classe.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'classes removed'});
        else response.send({success: false, message: 'Error of remove the classes'})
    })
}


module.exports = {getAllClasses, getClasseById, AddClasse, removeClasse};




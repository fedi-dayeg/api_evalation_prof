const {Etudiant} = require('../Models/Etudiant');

function getAllEtudiants(response) {
    Etudiant.find({}).populate({path: 'classe', populate:{path: 'proffiseurs', select: 'nom prenom'}}).exec(function (err, etudiants) {
        if (!err) response.send({
            success: true,
            etudiants: etudiants
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getEtudiantById(request, response) {
    let id = request.params.id;
    Etudiant.findById(id).populate({path: 'classe', populate:{path: 'proffiseurs', select: 'nom prenom'}, populate:{path: 'proffiseurs', select: 'nom'}}).exec(function (err, etudiants) {
        if (!err) response.send({
            message: true,
            etudiants: etudiants,
        });
        else response.send({
            success: false,
            message: 'No etudiants Found'
        })
    })
}

function loginEtudiant(request, response) {
    //console.log(request)
    // let {username, password} = request;
    const nom = request.body.nom;
    const password = request.body.password;
    //console.log(request)
    console.log(nom, password);
    Etudiant.findOne({nom: nom, password: password}).populate({path: 'classe',populate:{path: 'proffiseurs', select: 'nom'}}).exec(function (err, etudiants) {
        if (!etudiants) {
            console.log(err, "err");
            let reponse = {
                success: false,
                message: 'etudiants not Found',
            };
            response.send(JSON.stringify(reponse));
        } else {
            console.log(etudiants)
            let reponse = {
                success: true,
                message: 'etudiants Found',
                etudiants: etudiants,
            };
            response.send(JSON.stringify(reponse));
        }
    })
}

function AddEtudiant(request, response) {
    let newEtudiant = new Etudiant(request.body);
    try {
        newEtudiant.save().then(function (etudiant) {
            response.send({
                success: true,
                etudiant: etudiant
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

function removeEtudiant(request, response) {
    let id = request.params.id;
    Etudiant.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'etudiant removed'});
        else response.send({success: false, message: 'Error of remove the etudiant'})
    })
}


module.exports = {getAllEtudiants, getEtudiantById, AddEtudiant, removeEtudiant, loginEtudiant};




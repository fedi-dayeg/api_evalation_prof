const Prof = require('../Models/Prof');
const path = require('path');
exports.createEtudiant = (req, res, next) => {
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;

    const prof = new Prof({
        nom: Nom,
        prenom: Prenom
    });

    prof
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Ajout avec succés',
                result: prof
            });
        })
        .catch(err => {
            console.log(err);
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });


};

exports.getProfs = (req, res, next) => {
    Prof.find()
        .then(result => {
            res.status(200)
                .json({
                    message: 'Prof trouvé avec succée',
                    prof: result
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err);
        });


};

exports.getProf = (req,res, next) => {
    const profId = req.params.profId;
    Prof.findById(profId)
        .then(prof => {
            if (!prof) {
                const error = new Error('Prof pas trouver !!');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: 'Prof Trouver.',
                prof: prof
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
                console.log('Error Trouver lors de la recherche de  prof');
            }
            next(err);
        });
};

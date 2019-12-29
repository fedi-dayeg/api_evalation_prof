const Etudiant = require('../Models/Etudiant');


exports.createEtudiant = (req, res, next) => {
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;

    const etudiant = new Etudiant({
        nom: Nom,
        prenom: Prenom
    });

    etudiant
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Ajout avec succés',
                result: etudiant
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

exports.getEtudiants = (req, res, next) => {
    Etudiant.find()
        .then(result => {
            res.status(200)
                .json({
                    message: 'Etudiant trouvé avec succée',
                    etudiant: result
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err);
        });


};

exports.getEtudiant = (req,res, next) => {
    const etudiantId = req.params.etudiantId;
    Etudiant.findById(etudiantId)
        .then(etudiant => {
            if (!etudiant) {
                const error = new Error('Etudiant pas trouver !!');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: 'etudiant Trouver.',
                etudiant: etudiant
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
                console.log('Error Trouver lors de la recherche de  étudiant');
            }
            next(err);
        });
};

exports.updateEtudiant = (req, res, next) => {
    const etudiantId = req.params.etudiantId;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    Etudiant.findById(etudiantId)
        .then(
            etudiant => {
                if (!etudiant) {
                    const error = new Error('Etudiant pas Trouver');
                    error.statusCode = 500;
                    throw error;
                }
                etudiant.nom = nom;
                etudiant.prenom = prenom;
                return etudiant.save()
            })
        .then(result => {
            res.status(200).json({
                message: 'etudiant A jours',
                etudiant: result
            });

        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
                console.log('Error in the Update Function');
                console.log(err);
            };
            next(err);
        })
};

exports.deleteEtudiant = (req, res, next) => {
    const etudiantId = req.params.etudiantId;
    Etudiant.findById(etudiantId)
        .then(etudiant => {
            if (!etudiant){
                const error =new Error('Etudiant pas Trouver');
                error.statusCode = 404 ;
                throw error;
            }
            return Etudiant.findByIdAndRemove(etudiant)
        })
        .then(result => {
            res.status(200).json({
                message: 'Etudiant Supprimer'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
                console.log(err);
            }
            next(err);
        })
};

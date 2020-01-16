const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Classe = mongoose.model('Classe', new Schema({
        nom: {
            type: String,
            required: true
        },
        annee: {
            type: String,
            required: false
        },
        etudiants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Etudiant'
        }],

        proffiseurs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Proffiseur'
        }],
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'created_at'
        }
    }
));
module.exports.Classe = Classe;

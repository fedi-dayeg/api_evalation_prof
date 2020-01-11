const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Proffiseur = mongoose.model('Proffiseur', new Schema({
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        classes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Classe'
        }],
        evaluations: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Evaluation'
        }]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'created_at'
        }
    }
));

module.exports.Proffiseur = Proffiseur;

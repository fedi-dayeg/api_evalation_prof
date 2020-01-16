const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Etudiant = mongoose.model('Etudiant', new Schema({
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        numTel: {
            type: Number,
            required: false
        },
        numInscription: {
            type: Number,
            required: false
        },
        cin: {
            type: Number,
            required: false
        },
        classe: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Classe'
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'created_at'
        }
    }
));
module.exports.Etudiant = Etudiant;

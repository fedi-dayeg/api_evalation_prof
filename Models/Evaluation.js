const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evaluation = mongoose.model('Evaluation', new Schema({
        note: {
            type: String,
            required: true
        },
        niveauDifficulter: {
            type: String,
            required: true
        },
        prendreProfAutreFois:{
            type: String,
            required: true
        },

        etudaints: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Etudiant'
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'created_at'
        }
    }
));

module.exports.Evaluation = Evaluation;

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
}

});
module.exports = mongoose.model('Etudiant', etudiantSchema);

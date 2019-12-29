const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profShema = new Schema({
    nom: {
        type:String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Prof',profShema);

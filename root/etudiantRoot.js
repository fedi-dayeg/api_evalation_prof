const etudiantController = require('../Controllers/etudiantController');
const express = require('express');
const router = express.Router();

router.post('/etudiant', etudiantController.createEtudiant);
router.get('/etudiant', etudiantController.getEtudiants);
router.get('/etudiant/:etudiantId', etudiantController.getEtudiant);
router.put('/etudiant/:etudiantId', etudiantController.updateEtudiant);
router.delete('/etudiant/:etudiantId', etudiantController.deleteEtudiant);
module.exports = router;

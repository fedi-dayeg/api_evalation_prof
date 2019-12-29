const profControll = require('../Controllers/profController');
const express = require('express');
const  router = express.Router();

router.post('/prof',
    profControll.createEtudiant
);
router.get('/prof', profControll.getProfs);
router.get('/prof/profId', profControll.getProf);

module.exports = router;

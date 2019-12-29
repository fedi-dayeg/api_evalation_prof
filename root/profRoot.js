const profControll = require('../Controllers/profController');
const express = require('express');
const  router = express.Router();

router.post('/prof', profControll.createProf);
router.get('/prof', profControll.getProfs);
router.get('/prof/:profId', profControll.getProf);
router.put('/prof/:profId',profControll.updateProf);
router.delete('/prof/:profId', profControll.deleteRof);
module.exports = router;

const express = require('express');
const router = express.Router();
const { createCrew, getCrew } = require('../controllers/crewController.js');

router.post('/create', createCrew);
router.get('/', getCrew);

module.exports = router;
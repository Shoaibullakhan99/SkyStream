const express = require('express');
const router = express.Router();
const { createAircraft, getAircraft } = require('../controllers/aircraftController.js');

router.post('/create', createAircraft);
router.get('/', getAircraft);

module.exports = router;
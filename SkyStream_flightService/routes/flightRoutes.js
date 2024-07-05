const express = require('express');
const router = express.Router()
const { createFlight, getFlights } = require('../controllers/flightController.js');

router.post('/create', createFlight);
router.get('/', getFlights);

module.exports = router;
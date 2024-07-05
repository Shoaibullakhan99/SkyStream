const mongoose = require('mongoose');

const FlightShema = mongoose.Schema({
    flightNumber: {
        type: String,
        required: true,
        unique: true
    },
    departure: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    aircraftId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aircraft',
        required: true
    },
    crewId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crew'
    }]
}, {timeStamps: true});

module.exports = mongoose.model('Flight', FlightShema);
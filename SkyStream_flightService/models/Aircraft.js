const mongoose = require('mongoose');

const aircraftSchema = mongoose.Schema({
    model:{
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        requied: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Aircraft', aircraftSchema);
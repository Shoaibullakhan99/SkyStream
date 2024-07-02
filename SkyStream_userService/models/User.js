const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['passenger', 'staff', 'admin'],
        default: 'passenger'
    }
},{timeStamps: true});

module.exports = mongoose.model('User', userSchema);
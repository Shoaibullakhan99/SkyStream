const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const connectDb  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDb`)
    }
    catch (err) {
        console.error(`Error connecting to database`, err);
    }
}

module.exports = connectDb


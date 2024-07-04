const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config/.env'});

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } 
    catch (err){
        console.error(`Error connecting to the database,`, err);
    }
}

module.exports = connectDb;
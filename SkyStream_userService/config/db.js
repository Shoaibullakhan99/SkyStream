const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const connectDb = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI, {
            useNewurlParser: true,
            useUnifiedTopology: true
        }
    );
        console.log(`Connection to mongoDB established for skyStream user-service`);
    }
    catch (err) {
        console.log(`Error conncting to mongoDb skystream user-service`, err)
    }
};

module.exports = connectDb;
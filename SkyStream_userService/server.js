const express = require('express');
const connectDb = require('./config/db.js');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

dotenv.config({path: './config/.env'})

const app = express();
app.use(cors());   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

connectDb();

app.listen(PORT, () => {
    console.log(`User-Service running on PoRT ${PORT}`);
});
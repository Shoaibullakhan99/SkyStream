const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDb = require('./config/db.js');

const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

const PORT = process.env.PORT || 5002;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

connectDb();

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})

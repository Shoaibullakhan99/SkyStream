const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./config/db.js');
const dotenv = require('dotenv');

dotenv.config({path: './config/.env'});

const PORT = process.env.PORT || 5001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

connectDb();

app.use('/api/aircraft', require('./routes/aircraftRoutes.js'));
app.use('/api/flights', require('./routes/flightRoutes.js'));
app.use('/api/crew', require('./routes/crewRoutes.js'));

app.listen(PORT, () => {
    console.log(`Server for flight service is running on PORT ${PORT}`);
})
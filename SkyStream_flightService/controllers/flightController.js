const Flight = require('../models/Flights.js');

exports.createFlight = async (req, res) => {
    const { flightNumber, departure, destination, departureTime, arrivalTime, aircraftId, crewId} = req.body;

    try {
        let flight = new Flight({
            flightNumber,
            departure,
            destination,
            departureTime,
            arrivalTime,
            aircraftId,
            crewId
        })

        await flight.save()
        .then(() => res.status(200).json({message: 'Flight is created successfully', flightId: flight.id}))
        .catch((err) => {
            return res.status(400).json({
                message: err
            });
        })
    }
    catch (err){
        console.log(`Error creating flight`);
        return res.status(400).json({
            message: `Error creating flight, server error`
        })
    }
}

exports.getFlights = async (req, res) => {
    try {
        const flights = await Flight.find().populate('Aircraft').populate('Crew');
        return res.status(200).json({
            flights: flights
        })
    }
    catch (err){
        console.error(`Error fetching flights`)
        res.status(400).json({message: 'Error fetching flights'})
    }
}
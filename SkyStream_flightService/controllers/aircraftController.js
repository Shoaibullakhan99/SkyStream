const Aircraft = require('../models/Aircraft.js');

exports.createAircraft = async (req, res) => {
    const {model, capacity, registrationNumber} = req.body;

    try {
        let aircraft = new Aircraft({
            model,
            capacity,
            registrationNumber
        });

        const isPresent = await aircraft.findOne({registrationNumber});

        if(isPresent){
            return res.status(500).json({
                message: `Aircraft with registation number ${registrationNumber} is already present`
            });
        }
    
        await aircraft.save()
        return res.status(200).json({message : `Aircraft created Succesfully`, aircraftId: aircraft.id});
    }
    catch (err){
        console.error(`Error creating an Aircraft`, err);
       return res.status(400).json({message: `error creating an Aircraft!, Server error`});
    }
}

exports.getAircraft = async (req, res) => {
    try {
        const aircraft = await Aircraft.find();
        return res.status(200).json(aircraft);
    } 
    catch (err){
        console.error(`error fetching aircrafts`, err);
        return res.status(400).json({
            message: `Error fetching aircrafts!, Server error`
        });
    }
}
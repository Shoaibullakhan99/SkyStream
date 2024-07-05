const Crew = require('../models/Crew.js');

exports.createCrew = async (req, res) => {
    const {name, role} = req.body;

    try {
        let crew = new Crew({
            name, role
        });

        await crew.save();
        return res.status(200).json({
            message: `Crew created succesfully`,
            crewId : crew.id
        });
    }
    catch (err){
        console.error(`Error creating crew, server error!`, err);
        return res.status(400).json({
            message: `Error occured while creating crew, server error`
        });
    }
}

exports.getCrew = async (req, res) => {
    try{

    }
    catch (err){
        console.error('Error fetching crews', err);
        res.status(400).json({
            message: `Error fetching crews`
        })
    }
}
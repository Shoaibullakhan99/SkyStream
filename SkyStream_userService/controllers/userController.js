const User = require('../models/User.js');
const AuthService = require('../services/authService.js');

function generateUsrId () {
    return parseInt(Math.random()*100000)
}

exports.registerUser = async (req, res) => {
    const {username, email, password, role} = req.body;

    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: `User already exists`});
        }

        const hashedPassword = await AuthService.hashpassword(password);

        user = new User({
            username, email, hashedPassword, role
        });

        await user.save();

        //Not using for now need more clarity for user_id part
        const id = generateUsrId()

        const token = AuthService.generateToken(user.id)
        res.status(200).json({token: token})
    }
    catch (error){
        console.error(error.message);
        res.status(500).json({message: `Server error could not register a user, please try again after sometime`});
    }
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: 'Invalid Credentials'});
        }
        const isMatch = await AuthService.comparepassword(password, user.password)
        if(!isMatch){
            res.status(400).json({message: `Invalid credentials`});
        }
        const token = AuthService.generateToken(user.id);
        res.status(200).json({token});
    }
    catch (err){
        console.error(err.message);
        res.status(500).send({message: `Server error`});
    }
};
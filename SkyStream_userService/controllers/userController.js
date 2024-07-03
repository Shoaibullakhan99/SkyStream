const User = require('../models/User.js');
const AuthService = require('../services/authService.js');

exports.registerUser = async (req, res) => {
    const {username, email, password, role} = req.body;

    try {
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: `User already exists`});
        }

        const hashedPassword = await AuthService.hashpassword(password);

        user = new User({
            username, email, password: hashedPassword, role
        });

        await user.save();

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
        res.status(200).json({ token: token, role: user.role});
    }
    catch (err){
        console.error(err.message);
        res.status(500).send({message: `Server error`});
    }
};
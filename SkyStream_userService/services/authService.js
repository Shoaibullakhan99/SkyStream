const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

class AuthService {
    static async hashpassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    static async comparepassword(password, hashedPassword){
        return bcrypt.compare(password, hashedPassword);
    }

    static generateToken(userId){
        const payload = {
            user: {
                id: userId
            }
        };
        return jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn: 360000});
    }
};

module.exports = AuthService;
require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = (user) => {
    const token = jwt.sign(user, process.env.JWT_SECRET, jwtConfig);
    return token;   
};

module.exports = { createToken };
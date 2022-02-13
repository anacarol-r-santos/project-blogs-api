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

const verifyToken = (token) => {
    const isToken = jwt.verify(token, process.env.JWT_SECRET);
    return isToken;   
};

module.exports = { createToken, verifyToken };
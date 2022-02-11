require('dotenv').config();
const { Users } = require('../../models');
const { createToken } = require('./auth');

// const create = (req, res, next) => {
//     const { displayName, email, password, image } = req.body;
//     Users.create({ displayName, email, password, image })
//         .then((newUser) => res.status(201).send(newUser))
//         .catch((err) => {
//             console.log(err);
//             return res.status(400).send(err.message);
//         });
//         next();
// };

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    try {
        const newUser = await Users.create({ displayName, email, password, image });
        const token = createToken({ user: newUser });

        return res.status(201).json({ token });
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};

// const createToken = async (req, _res, next) => {
//     try {
//         const { displayName, email } = req.body;       

//         const jwtConfig = {
//             expiresIn: '7d',
//             algorithm: 'HS256',
//         };    
    
//         const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET, jwtConfig);
    
//         return token;        
//     } catch (error) {
//         next(error);
//     }    
// };

const getAll = (req, res) => {
    Users.findAll()
        .then((users) => res.status(201).json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).send(err.message);
        });
};

const findEmail = async (req, res, next) => {
    const { email } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (user) return res.status(409).json({ message: 'User already registered' });
    next();
};

module.exports = { create, getAll, findEmail, createToken };
require('dotenv').config();
const { Users } = require('../../models');
const { createToken } = require('./auth');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await Users.findOne({ where: { email, password } });
        if (!findUser) return res.status(400).json({ message: 'Invalid fields' });

        const token = createToken({ user: findUser });

        return res.status(20).json({ token });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
};

module.exports = { loginUser };

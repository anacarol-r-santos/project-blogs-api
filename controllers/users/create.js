require('dotenv').config();
const { createUserService } = require('../../services');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    try {
        const { code, data } = await createUserService({ displayName, email, password, image });

        return res.status(code).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
};

module.exports = { createUser };
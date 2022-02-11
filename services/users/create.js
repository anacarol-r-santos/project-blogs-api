const { schema } = require('./validateUser');

const { User } = require('../../models');

const { createToken } = require('../../controllers/users/auth');

const createUserService = async ({ displayName, email, password, image }) => {
    const { error } = schema.validate(
        { displayName, email, password },
        // https://stackoverflow.com/questions/58408362/how-to-set-custom-error-messages-in-hapi-joi
        { abortEarly: false },
    );
    if (error) {
        return { code: 400,
                 data: { message: error.message } };
    }
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
        return { code: 409, data: { message: 'User already registered' } }; 
    }
    const { dataValues: { id } } = await User.create({ displayName, email, password, image });
    const user = { id, displayName, email, image };
    const token = createToken(user);
    return { code: 201, data: { token } };
};

// Auxiliada por Ricardo Antonio T13-C

module.exports = { createUserService };
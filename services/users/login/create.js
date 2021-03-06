const { schema } = require('./validateLogin');
const { User } = require('../../../models');
const { createToken } = require('../../auth/auth');

const loginService = async ({ email, password }) => {
    const { error } = schema.validate(
        { email, password },
        { abortEarly: false },
    );
    if (error) {
        return { code: 400,
                 data: { message: error.message } };
    }
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
        return { code: 400, data: { message: 'Invalid fields' } }; 
    }
    const { dataValues: { id } } = findUser;
    const token = createToken({ id });
    return { code: 200, data: { token } };
};

module.exports = { loginService };
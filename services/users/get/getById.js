const { User } = require('../../../models');

const getByIdService = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return { code: 404, data: { message: 'User does not exist' } };

    return { code: 200, data: user };
};

module.exports = { getByIdService };
const { User } = require('../../models');

const getAllUserService = async () => {
    const userList = await User.findAll();

    return { code: 200, userList };
};

module.exports = { getAllUserService };

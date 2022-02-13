const { createUser } = require('./users/create');
const { getAllUser } = require('./users/getAll');
const { loginUser } = require('./users/login');

module.exports = {
    createUser,
    loginUser,
    getAllUser,
};
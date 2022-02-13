const { createUser } = require('./users/create');
const { getAllUser } = require('./users/getAll');
const { loginUser } = require('./users/login');
const { getUserById } = require('./users/getById');

module.exports = {
    createUser,
    loginUser,
    getAllUser,
    getUserById,
};
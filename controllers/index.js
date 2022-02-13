const { createUser } = require('./users/create');
const { getAllUser } = require('./users/getAll');
const { loginUser } = require('./users/login');
const { getUserById } = require('./users/getById');
const { createCategorie } = require('./categories/create');

module.exports = {
    createUser,
    loginUser,
    getAllUser,
    getUserById,
    createCategorie,
};
// const { validateEmailToLogin, validatePasswordToLogin } = require('./validateLogin');
const { createUserService } = require('./users/create/create');
const { loginService } = require('./users/login/create');
const { getAllUserService } = require('./users/getAll');

module.exports = { 
    createUserService,
    loginService,
    getAllUserService,
};  
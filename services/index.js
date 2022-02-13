// const { validateEmailToLogin, validatePasswordToLogin } = require('./validateLogin');
const { createUserService } = require('./users/create/create');
const { loginService } = require('./users/login/create');
const { getAllUserService } = require('./users/get/getAll');
const { getByIdService } = require('./users/get/getById');
const { createCategorieService } = require('./categories/create');

module.exports = { 
    createUserService,
    loginService,
    getAllUserService,
    getByIdService,
    createCategorieService,
};  
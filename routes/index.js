const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers');

// const { loginUser } = require('../controllers/users/login');

// const { validatePasswordToLogin, validateEmailToLogin } = require('../services');

router.post('/user', createUser);
// router.get('/user', getAll);
// router.post('/login', validateEmailToLogin, validatePasswordToLogin, loginUser);

module.exports = { router };
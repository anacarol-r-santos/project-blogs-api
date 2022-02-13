const express = require('express');

const router = express.Router();

const { createUser, loginUser, getAllUser } = require('../controllers');
const { authService } = require('../services/auth/validToken');

// const { loginUser } = require('../controllers/users/login');

// const { validatePasswordToLogin, validateEmailToLogin } = require('../services');

router.post('/user', createUser);
router.get('/user', authService, getAllUser);
router.post('/login', loginUser);

module.exports = { router };
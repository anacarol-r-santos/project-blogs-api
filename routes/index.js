const express = require('express');

const router = express.Router();

const { createUser, loginUser } = require('../controllers');

// const { loginUser } = require('../controllers/users/login');

// const { validatePasswordToLogin, validateEmailToLogin } = require('../services');

router.post('/user', createUser);
// router.get('/user', getAll);
router.post('/login', loginUser);

module.exports = { router };
const express = require('express');

const router = express.Router();

const { createUser, loginUser, getAllUser, getUserById } = require('../controllers');
const { authService } = require('../services/auth/validToken');

router.post('/user', createUser);
router.get('/user', authService, getAllUser);
router.get('/user/:id', authService, getUserById);
router.post('/login', loginUser);

module.exports = { router };
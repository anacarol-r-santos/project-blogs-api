const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

const { authService } = require('../services/auth/validToken');

router.post('/user', controllers.createUser);
router.get('/user', authService, controllers.getAllUser);
router.get('/user/:id', authService, controllers.getUserById);
router.post('/login', controllers.loginUser);
router.post('/categories', authService, controllers.createCategorie);
router.get('/categories', authService, controllers.getAllCategorie);
router.post('/post', authService, controllers.createPost);

module.exports = { router };
const express = require('express');

const router = express.Router();

const { create, getAll, findEmail } = require('../controllers/users');

router.post('/user', findEmail, create);
router.get('/user', getAll);

module.exports = { router };
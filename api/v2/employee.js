const express = require('express');

// const jwt = require('jsonwebtoken');

const empctr = require('./../../controllers/employee');

const router = express.Router();

router.get('/create-user', empctr.createEmployee);
router.post('/signin', empctr.signin);

module.exports = router;

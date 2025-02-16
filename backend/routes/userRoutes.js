const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router; 
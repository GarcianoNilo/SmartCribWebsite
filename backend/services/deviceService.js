const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// Define routes
router.get('/devices', deviceController.getAllDevices); // Corrected typo: "devices" not "devices"

module.exports = router;
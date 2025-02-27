const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Define routes
router.post('/reports', reportController.generateReport);

module.exports = router;
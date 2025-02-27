const Device = require('../models/Device');

// Get all devices
exports.getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find(); // Fetch all devices from the database
        console.log('Fetched devices:', devices); // Log the fetched devices
        res.status(200).json(devices);
    } catch (error) {
        console.error('Error fetching devices:', error); // Log the error
        res.status(500).json({ message: error.message });
    }
};
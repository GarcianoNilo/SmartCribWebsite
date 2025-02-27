const reportService = require('../services/reportService');

// Generate a report
exports.generateReport = async (req, res) => {
    const { userId, deviceIds } = req.body;

    try {
        const report = await reportService.generateReport(userId, deviceIds);
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const Report = require('../models/Report');
const ReportDevice = require('../models/ReportDevice');
const Device = require('../models/Device');

// Generate a report
const generateReport = async (userId, deviceIds) => {
    const report = new Report({ UserID: userId });
    await report.save();

    for (const deviceId of deviceIds) {
        const reportDevice = new ReportDevice({ ReportID: report._id, DeviceID: deviceId });
        await reportDevice.save();
    }

    return report;
};

module.exports = {
    generateReport
};
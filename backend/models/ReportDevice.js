const mongoose = require('mongoose');

const reportDeviceSchema = new mongoose.Schema({
    ReportID: { type: mongoose.Schema.Types.ObjectId, ref: 'Report', required: true },
    DeviceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true }
});

const ReportDevice = mongoose.model('ReportDevice', reportDeviceSchema);

module.exports = ReportDevice;
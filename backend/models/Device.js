const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    QRCode: { type: String, required: true },
    SerialNumber: { type: String, required: true },
    IMEI: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
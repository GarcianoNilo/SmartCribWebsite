const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Status: { type: String, default: 'pending' },
    CreatedAt: { type: Date, default: Date.now },
    DownloadedAt: { type: Date }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
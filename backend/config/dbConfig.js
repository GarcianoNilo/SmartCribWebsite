const mongoose = require('mongoose');

// MongoDB Atlas connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB; 
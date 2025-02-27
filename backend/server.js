require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const reportRoutes = require('./routes/reportRoutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', userRoutes);
app.use('/api', deviceRoutes);
app.use('/api', reportRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
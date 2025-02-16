require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use user routes
app.use('/api', userRoutes);

// Example login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Implement your authentication logic here
    res.json({ token: 'your_token_here' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        console.warn('No token provided'); // Informative message
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Token validation error:', err); // Informative message
            return res.sendStatus(403);
        }
        console.log(`Token validated for user: ${user.username}`); // Informative message
        req.user = user;
        next();
    });
};

module.exports = authenticateToken; 
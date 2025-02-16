const User = require('../models/User');

// Create a new user
const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

// Get all users
const getAllUsers = async () => {
    return await User.find();
};

// Export the service functions
module.exports = {
    createUser,
    getAllUsers
}; 
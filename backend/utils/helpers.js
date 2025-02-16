// Example utility function for hashing passwords
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Example utility function for validating email format
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

module.exports = {
    hashPassword,
    isValidEmail
}; 
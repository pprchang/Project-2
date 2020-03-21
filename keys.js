// Verify keys file loaded 
console.log("keys loaded");

// Export 'keyInfo' object (youtube api key saved in .env)
exports.keyInfo = {
    key: process.env.YOUTUBE_KEY
};
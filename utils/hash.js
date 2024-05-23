const crypto = require('crypto');

const generateHash = (url, salt) => {
  return crypto.createHash('sha256').update(url + salt).digest('hex');
};

module.exports = generateHash;

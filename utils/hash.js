const crypto = require('crypto');

const generateHash = (url, salt) => {
  let hash = crypto.createHash('sha256').update(url + salt).digest('hex');
  return hash.substring(0, 10); 
};

module.exports = generateHash;

const fs = require('fs');
const configPath = './db.config.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

exports.config = parsed;

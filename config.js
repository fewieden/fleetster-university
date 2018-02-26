const path = require('path');

const config = {
	db: path.join(__dirname, 'system', 'LocalDB'),
	secret: 'SUPERSECURE11!'
};

module.exports = config;
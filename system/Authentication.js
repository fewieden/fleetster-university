const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

class Authenticate {

	constructor() {
		this.sessions = {};
	}

	encryptPassword(password) {
		return bcrypt.hash(password, 10);
	}

	async login(pass, user) {
		const res = await bcrypt.compare(pass, user.password);
		if (!res) {
			res.send({error: 'Wrong credentials'});
		}

		const token = jwt.sign({id: user._id}, config.secret, {expiresIn: 86400});

		this.sessions[token] = token;

		return {token};
	}

	isAuthenticated(token) {
		return new Promise((res) => {
			jwt.verify(token, config.secret, (err) => {

				if(!err && this.sessions.hasOwnProperty(token)) {
					res(true);
				} else {
					res(false);
				}
			});
		});
	}

	async logout(token) {
		if (await this.isAuthenticated(token)) {
			delete this.sessions[token];
		}
	}

}

module.exports = Authenticate;
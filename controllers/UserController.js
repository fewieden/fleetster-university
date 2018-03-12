class UserController {

	constructor({entity, entityDao, authentication}) {
		this.entity = entity;
		this.entityDao = entityDao;
		this.authentication = authentication;
	}

	removeSensitiveData(model) {
		if (model) {
			delete model.password;
		}
	}

	async createUserRoute(req, res) {
		console.log('createUserRoute');
		req.body.password = await this.authentication.encryptPassword(req.body.password);
		let model = await this.entityDao.insert(this.entity, req.body);
		res.send(model);
	}

	async readUserRoute(req, res) {
		console.log('readUserRoute');
		let model = await this.entityDao.findById(this.entity, req.params.id);
		this.removeSensitiveData(model);
		res.send(model);
	}

	async updateUserRoute(req, res) {
		console.log('updateUserRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			return res.sendStatus(401);
		}
		delete req.body.password;
		req.body._id = req.params.id;
		let model = await this.entityDao.update(this.entity, req.body);
		this.removeSensitiveData(model);
		res.send(model);
	}

	async deleteUserRoute(req, res) {
		console.log('deleteUserRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			return res.sendStatus(401);
		}
		let model = await this.entityDao.deleteById(this.entity, req.params.id);
		this.removeSensitiveData(model);
		res.send(model);
	}

	async loginUserRoute(req, res) {
		console.log('loginUserRoute');
		let model = await this.entityDao.findById(this.entity, req.body._id);
		if (!model || model.error) {
			return res.send({error: 'Wrong credentials'});
		}

		try {
			const token = await this.authentication.login(req.body.password, model);
			return res.send(token);
		} catch (e) {
			return res.send({error: 'Wrong credentials'});
		}

	}

	async logoutUserRoute(req, res) {
		console.log('logoutUserRoute');
		await this.authentication.logout(req.header.authorization);
		res.send({});
	}
}

module.exports = UserController;
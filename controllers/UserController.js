class UserController {

	constructor(entity, entityDao) {
		this.entity = entity;
		this.entityDao = entityDao;
	}

	removeSensitiveData(model) {
		if (model) {
			delete model.password;
		}
	}

	async createUserRoute(req, res) {
		console.log('createUserRoute');
		// TODO: register user
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

		delete req.body.password;
		req.body._id = req.params.id;
		let model = await this.entityDao.update(this.entity, req.body);
		this.removeSensitiveData(model);
		res.send(model);
	}

	async deleteUserRoute(req, res) {
		console.log('deleteUserRoute');
		let model = await this.entityDao.deleteById(this.entity, req.params.id);
		this.removeSensitiveData(model);
		res.send(model);
	}

	async loginUserRoute(req, res) {
		console.log('loginUserRoute');
		// TODO: create login
	}

	async logoutUserRoute(req, res) {
		console.log('logoutUserRoute');
		// TODO: create logout
	}
}

module.exports = UserController;
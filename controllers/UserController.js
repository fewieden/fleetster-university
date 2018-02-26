class UserController {

	constructor(entity, entityDao) {
		this.entity = entity;
		this.entityDao = entityDao;
	}

	async createUserRoute(req, res) {
		console.log('createUserRoute');
		// TODO: register user
		let model = await this.entityDao.insert(this.entity, req.body);
		res.send(model);
	}

	async readUserRoute(req, res) {
		console.log('readUserRoute');
		// TODO: filter sensitive data
		let model = await this.entityDao.findById(this.entity, req.params.id);
		res.send(model);
	}

	async updateUserRoute(req, res) {
		console.log('updateUserRoute');
		// TODO: filter sensitive data
		let model = await this.entityDao.update(this.entity, req.body);
		res.send(model);
	}

	async deleteUserRoute(req, res) {
		console.log('deleteUserRoute');
		// TODO: filter sensitive data
		let model = await this.entityDao.deleteById(this.entity, req.params.id);
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
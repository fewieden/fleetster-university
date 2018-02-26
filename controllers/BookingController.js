class BookingController {

	constructor({entity, entityDao, authentication}) {
		this.entity = entity;
		this.entityDao = entityDao;
		this.authentication = authentication;
	}

	async createBookingRoute(req, res) {
		console.log('createBookingRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			res.sendStatus(401);
		}
		let model = await this.entityDao.insert(this.entity, req.body);
		res.send(model);
	}

	async readBookingRoute(req, res) {
		console.log('readBookingRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			res.sendStatus(401);
		}
		let model = await this.entityDao.findById(this.entity, req.params.id);
		res.send(model);
	}

	async updateBookingRoute(req, res) {
		console.log('updateBookingRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			res.sendStatus(401);
		}
		let model = await this.entityDao.update(this.entity, req.body);
		res.send(model);
	}

	async deleteBookingRoute(req, res) {
		console.log('deleteBookingRoute');
		if (!await this.authentication.isAuthenticated(req.headers.authorization)) {
			res.sendStatus(401);
		}
		let model = await this.entityDao.deleteById(this.entity, req.params.id);
		res.send(model);
	}
}

module.exports = BookingController;
class BookingController {

	constructor(entity, entityDao) {
		this.entity = entity;
		this.entityDao = entityDao;
	}

	async createBookingRoute(req, res) {
		console.log('createBookingRoute');
		let model = await this.entityDao.insert(this.entity, req.body);
		res.send(model);
	}

	async readBookingRoute(req, res) {
		console.log('readBookingRoute');
		let model = await this.entityDao.findById(this.entity, req.params.id);
		res.send(model);
	}

	async updateBookingRoute(req, res) {
		console.log('updateBookingRoute');
		let model = await this.entityDao.update(this.entity, req.body);
		res.send(model);
	}

	async deleteBookingRoute(req, res) {
		console.log('deleteBookingRoute');
		let model = await this.entityDao.deleteById(this.entity, req.params.id);
		res.send(model);
	}
}

module.exports = BookingController;
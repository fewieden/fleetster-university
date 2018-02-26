const path = require('path');
const mongoose = require('mongoose');
const EntityDao = require('./EntityDao');

class MongoDB extends EntityDao {

	constructor() {
		super();
		mongoose.connect('mongodb://localhost/fleetster-university');
		this.models = {};
	}

	getModel(entity) {
		if (!this.models.hasOwnProperty(entity)) {
			const model = require(path.join(__dirname, '..', 'models', entity));
			this.models[entity] = model;
		}

		return this.models[entity];
	}

	insert(entity, data) {
		return new Promise((res, rej) => {
			const Model = this.getModel(entity);
			const model = new Model(data);

			model.save((err, entry) => {
				if (err) {
					rej(err);
				} else {
					res({_id: entry._id});
				}
			});
		});
	}

	async findById(entity, id) {
		return new Promise((res, rej) => {
			const model = this.getModel(entity);

			model.findById(id, (err, entry) => {
				if (err) {
					rej(err);
				}

				res(entry);
			});
		});
	}

	async update(entity, data) {
		return new Promise((res, rej) => {
			const model = this.getModel(entity);

			model.findByIdAndUpdate(data._id, {$set: data}, {'new': true}, function (err, entry) {
				if (err) {
					rej(err);
				}

				res(entry);
			});
		});
	}

	async deleteById(entity, id) {
		return new Promise((res, rej) => {
			const model = this.getModel(entity);

			model.findByIdAndRemove(id, function (err, entry) {
				if (err) {
					rej(err);
				}

				res(entry);
			});
		});
	}

}

module.exports = MongoDB;

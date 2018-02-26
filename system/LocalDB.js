const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const EntityDao = require('./EntityDao');

const basePath = path.join(__dirname, '..', 'LocalDB');

const write = promisify(fs.writeFile);
const read = promisify(fs.readFile);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const unlink = promisify(fs.unlink);

class LocalDB extends EntityDao {

	constructor() {
		super();
	}

	async checkDirectory() {
		try {
			(await stat(basePath)).isDirectory();
		} catch (error) {
			console.log(error.code);
			if(error.code === 'ENOENT') {
				await mkdir(basePath);
			}
		}
	}

	async insert(entity, data) {
		try {
			await this.checkDirectory();

			const _id = Date.now().toString();
			data._id = _id;
			await write(path.join(basePath, `${entity}_${_id}.json`), JSON.stringify(data));
			return {_id};
		} catch (error) {
			return {error};
		}
	}

	async findById(entity, id) {
		try {
			await this.checkDirectory();

			const file = await stat(path.join(basePath, `${entity}_${id}.json`));
			if (!file.isFile()) {
				return null;
			}

			const data = await read(path.join(basePath, `${entity}_${id}.json`));
			return JSON.parse(data);
		} catch (error) {
			return {error};
		}
	}

	async update(entity, data) {
		try {
			await this.checkDirectory();

			const {_id} = data;
			if (!_id) {
				return null;
			}

			const file = await stat(path.join(basePath, `${entity}_${_id}.json`));
			if (!file.isFile()) {
				return null;
			}

			await write(path.join(basePath, `${entity}_${_id}.json`), JSON.stringify(data));
			return data;
		} catch (error) {
			return {error};
		}
	}

	async deleteById(entity, id) {
		try {
			await this.checkDirectory();

			const file = await stat(path.join(basePath, `${entity}_${id}.json`));
			if (!file.isFile()) {
				return null;
			}

			const data = await read(path.join(basePath, `${entity}_${id}.json`));
			const res = JSON.parse(data);

			await unlink(path.join(basePath, `${entity}_${_id}.json`));
			return res;
		} catch (error) {
			return {error};
		}
	}

}

module.exports = LocalDB;
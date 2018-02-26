const express = require('express');
const booking = require('./Booking');
const user = require('./User');
const config = require('../config');
const Dao = require(config.db);
const entityDao = new Dao();
const Authentication = require('../system/Authentication');
const authentication = new Authentication();
const routes = [booking, user];
const router = express.Router();

const controllers = {};

for (let Group of routes) {
	for (let route in Group) {
		const routeDetails = new Group[route]();
		const controllerName = `${routeDetails.entity}Controller`;
		if (!controllers.hasOwnProperty(controllerName)) {
			const Controller = require(`../controllers/${controllerName}`);
			controllers[controllerName] = new Controller({entity: routeDetails.entity, entityDao, authentication});
		}

		router[routeDetails.method.toLowerCase()](routeDetails.path, controllers[controllerName][route].bind(controllers[controllerName]));
	}
}

module.exports = router;
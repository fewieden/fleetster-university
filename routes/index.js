const express = require('express');
const booking = require('./Booking');
const user = require('./User');
const Dao = require('../system/LocalDB');
const entityDao = new Dao();
const routes = [booking, user];
const router = express.Router();

const controllers = {};

for (let Group of routes) {
	for (let route in Group) {
		const routeDetails = new Group[route]();
		const controllerName = `${routeDetails.entity}Controller`;
		if (!controllers.hasOwnProperty(controllerName)) {
			const Controller = require(`../controllers/${controllerName}`);
			controllers[controllerName] = new Controller(routeDetails.entity, entityDao);
		}

		router[routeDetails.method.toLowerCase()](routeDetails.path, controllers[controllerName][route].bind(controllers[controllerName]));
	}
}

module.exports = router;
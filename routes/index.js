const express = require('express');
const booking = require('./Booking');
const routes = [booking];
const router = express.Router();

for (let group of routes) {
	for (let route in group) {
		const routeDetails = new group[route]();
		router[routeDetails.method.toLowerCase()](routeDetails.path, (req, res) => {
			res.send('Booking route');
		});
	}
}

module.exports = router;
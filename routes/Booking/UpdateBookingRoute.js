function UpdateBookingRoute() {
	this.path = '/booking/:id';
	this.method = 'PUT';
	this.entity = 'Booking';
}

module.exports = UpdateBookingRoute;
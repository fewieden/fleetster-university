function ReadBookingRoute() {
	this.path = '/booking/:id';
	this.method = 'GET';
	this.entity = 'Booking';
}

module.exports = ReadBookingRoute;
function DeleteBookingRoute() {
	this.path = '/booking/:id';
	this.method = 'DELETE';
	this.entity = 'Booking';
}

module.exports = DeleteBookingRoute;
function UpdateUserRoute() {
	this.path = '/user/:id';
	this.method = 'PUT';
	this.entity = 'User';
}

module.exports = UpdateUserRoute;
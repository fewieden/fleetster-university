function DeleteUserRoute() {
	this.path = '/user/:id';
	this.method = 'DELETE';
	this.entity = 'User';
}

module.exports = DeleteUserRoute;
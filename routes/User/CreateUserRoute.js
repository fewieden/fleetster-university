function CreateUserRoute() {
	this.path = '/register';
	this.method = 'POST';
	this.entity = 'User';
}

module.exports = CreateUserRoute;
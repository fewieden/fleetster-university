function ReadUserRoute() {
	this.path = '/user/:id';
	this.method = 'GET';
	this.entity = 'User';
}

module.exports = ReadUserRoute;
function LogoutUserRoute() {
	this.path = '/logout';
	this.method = 'POST';
	this.entity = 'User';
}

module.exports = LogoutUserRoute;
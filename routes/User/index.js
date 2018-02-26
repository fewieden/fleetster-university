const createUserRoute = require('./CreateUserRoute');
const readUserRoute = require('./ReadUserRoute');
const updateUserRoute = require('./UpdateUserRoute');
const deleteUserRoute = require('./DeleteUserRoute');
const loginUserRoute = require('./LoginUserRoute');
const logoutUserRoute = require('./LogoutUserRoute');

module.exports = {
	createUserRoute,
	readUserRoute,
	updateUserRoute,
	deleteUserRoute,
	loginUserRoute,
	logoutUserRoute
};
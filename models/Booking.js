const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
	type: String,
	userId: String,
	costs: Number,
	startDate: Date,
	endDate: Date,
});

module.exports = mongoose.model('Booking', BookingSchema);

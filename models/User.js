const mongoose = require('mongoose');
const { Schema } = mongoose;
const Applications = require('./Application');

const userSchema = new Schema({
	googleID: String,
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	// Applications: [Applications],
	NumOfApplications: {
		type: Number,
		default: 0
	}
});

mongoose.model('users', userSchema);
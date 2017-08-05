const mongoose = require('mongoose');
const { Schema } = mongoose;
const applicationSchema = require('./Application');

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
	Applications: [applicationSchema],
	NumOfApplications: {
		type: Number,
		default: 0
	}
});

mongoose.model('users', userSchema);
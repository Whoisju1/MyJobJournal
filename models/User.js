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
	image: {
		type: String
	},
	applications: [{
		type: Schema.Types.ObjectId,
		ref: 'Application'
	}],
	numOfApplications: {
		type: Number,
		default: 0
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
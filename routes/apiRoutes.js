const mongoose = require('mongoose');
const User = mongoose.model('User');
const Application = mongoose.model('Application');
const bodyParser = require('body-parser').urlencoded({
	extended: true
});

const fs = require('fs');

module.exports = app => {
	// add application
	app.post('/api/add', bodyParser, (req, res) => {
		// current user's ID
		userID = req.user._id;

		const company = req.body.company,
			companyInfo = req.body.companyInfo,
			companyPhone = req.body.companyPhone,
			companyEmail = req.body.companyEmail,
			companyWebsite = req.body.companyWebsite,
			companyLocation = req.body.companyLocation,
			jobID = req.body.jobID,
			position = req.body.position,
			status = req.body.status,
			source = req.body.source,
			dateApplied = req.body.dateApplied,
			requirements = req.body.requirements,
			compensation = req.body.compensation,
			jobDetails = req.body.jobDetails;

		User.findById(userID).then((user, err) => {
			if (err) return console.log('Error', err);

			let application = new Application({
				user: user._id,
				company,
				companyInfo,
				companyPhone,
				companyEmail,
				companyWebsite,
				companyLocation,
				jobID,
				position,
				status,
				dateApplied,
				requirements,
				compensation,
				source,
				jobDetails
			});

			application.save(err => {
				if (err) return console.log('Error: ', err);
			});

			user.applications.push(application);
			user.save((err, data) => {
				if (err) return console.log('Error: ', err);
				res.send('Application saved.');
			});
		});
	});

	// update application
	app.patch('/api/edit/id/:id', (req, res) => {
		let id = req.params.id;

		console.log('id: ', id);
		Application.findById(id, (err, application) => {
			if (err) return console.log('Error: ', err);

			application.company = req.body.company;
			application.companyInfo = req.body.companyInfo;
			application.companyPhone = req.body.companyPhone;
			application.companyEmail = req.body.companyEmail;
			application.companyWebsite = req.body.companyWebsite;
			application.companyLocation = req.body.companyLocation;
			application.jobID = req.body.jobID;
			application.position = req.body.position;
			application.status = req.body.status;
			application.dateApplied = req.body.dateApplied;
			application.requirements = req.body.requirements;
			application.compensation = req.body.compensation;
			application.jobDetails = req.body.jobDetails;
			application.source = req.body.source;

			application.save((err, data) => {
				if (err) return console.log('Error: ', err);
				res.send(data);
			});

			console.log(application);
		});
	});

	//delete application
	app.delete('/api/delete/id/:id', (req, res) => {
		const entryID = req.params.id;
		Application.findByIdAndRemove(entryID).then((entry, err) => {
			if (err) return console.log('Error: ', err);
			entry.save((err, data) => {
				if (err) return console.log('Error: ', err);
				User.update({ applications: entryID }, { $pull: { applications: entryID } }, (err, data) => {
					if (err) console.log('Error: ', err);
				});
			});
		});
	});

	// get user data
	app.get('/api/find/', (req, res) => {
		let userID = req.user.id;
		console.log('user ID', userID);
		User.findOne({ _id: userID }).populate('applications').exec((err, data) => {
			if (err) return console.log('Error: ', err);
			console.log(data);
			res.send(data);
		});
	});

	app.get('/api/find-one/id/:id', (req, res) => {
		const id = req.params.id;
		Application.findById(id, (err, application) => {
			if (err) return console.log('Error: ', err);
			res.send(application);
			console.log('application: ', application);
		});
	});
};

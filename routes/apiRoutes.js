const mongoose = require('mongoose');

const User = mongoose.model('User');
const Application = mongoose.model('Application');
const bodyParser = require('body-parser').urlencoded({
  extended: true,
});

module.exports = (app) => {
  // add application
  app.post('/api/add', bodyParser, (req, res) => {
    // current user's ID
    const { _id: userID } = req.user;

    const { company } = req.body;
    const { companyInfo } = req.body;
    const { companyPhone } = req.body;
    const { companyEmail } = req.body;
    const { companyWebsite } = req.body;
    const { companyLocation } = req.body;
    const { jobID } = req.body;
    const { position } = req.body;
    const { status } = req.body;
    const { source } = req.body;
    const { dateApplied } = req.body;
    const { requirements } = req.body;
    const { compensation } = req.body;
    const { jobDetails } = req.body;
    const { favorite } = req.body;

    User.findById(userID).then((user, err) => {
      if (err) return console.log('Error', err);

      const application = new Application({
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
        jobDetails,
        favorite,
      });

      application.save((err) => {
        if (err) return console.log('Error: ', err);
      });

      user.applications.push(application);
      user.save((err, data) => {
        if (err) return console.log('Error: ', err);
        res.send(data);
      });
    });
  });

  // update application
  app.patch('/api/edit/id/:id*?', (req, res) => {
    const { id } = req.params;
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
      application.favorite = req.body.favorite;

      console.log('INSIDE OF PATCH: ', application.favorite);

      application.save((err, data) => {
        if (err) return console.log('Error: ', err);
        res.send(data);
      });
    });
  });

  // delete application
  app.delete('/api/delete/id/:id', (req, res) => {
    const entryID = req.params.id;
    Application.findByIdAndRemove(entryID).then((entry, err) => {
      if (err) return console.log('Error: ', err);
      entry.save((err, data) => {
        if (err) return console.log('Error: ', err);
        User.update({ applications: entryID }, { $pull: { applications: entryID } }, (err, data) => {
          if (err) return console.log('Error: ', err);
          User.findOne({ _id: req.user._id }).populate('applications').exec((err, data) => {
            if (err) return console.log('Error: ', err);
            res.send(data);
          });
        });
      });
    });
  });

  // get user data
  app.get('/api/find/', (req, res) => {
    const userID = req.user.id;
    User.findOne({ _id: userID }).populate('applications').exec((err, data) => {
      if (err) return console.log('Error: ', err);
      res.send(data);
    });
  });

  app.get('/api/find-one/id/:id', (req, res) => {
    const { id } = req.params;
    Application.findById(id, (err, application) => {
      if (err) return console.log('Error: ', err);
      res.send(application);
    });
  });
  // search engine

  // app.get('/api/search/:searchTerm', (req, res) => {
  //   const { searchTerm } = req.params;
  //   const userID = req.user.id;

  //   User.find({ _id: userID })
  //     .then((data, err) => {
  //       if (err) return console.log('Error: ', err);
  //       // get the object of the array
  //       const [userObj] = data;
  //       // get the list of object IDs out of the object
  //       const { applications } = userObj;
  //       // iterate through the array of referenced object IDs
  //       applications.reduce((acc, id) => {
  //         console.log('==========> id: ', id);
  //         // search all the applications
  //         Application.find({
  //           $text: {
  //             $search: searchTerm,
  //           },
  //         })
  //           .exec((err, searchResults) => {
  //             if (err) return console.log('Error: ', err);
  //             searchResults.map((application) => {
  //               if (application._id === id) {
  //                 console.log('it is equal');
  //               }
  //             });
  //           });
  //       });
  //     });
  // });
};


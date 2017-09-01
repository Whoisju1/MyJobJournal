const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./models/User');
require('./models/Application');
require('./services/passport');
const app = express();


// connect mongoose to database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/job-note', {
// 	useMongoClient: true 
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log(`mongoose connected successfully`);
// });

// user express sessions as a middleware

app.use(
	session({
		secret: keys.cookieKey,
		maxAge: 30 * 24 * 60 * 60 * 1000,
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
// import route handlers
require('./routes/index')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

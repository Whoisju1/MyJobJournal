const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const app = express();

// connect mongoose to database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(passport.initialize());
app.use(passport.session());

// import route handlers
require('./routes/index')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
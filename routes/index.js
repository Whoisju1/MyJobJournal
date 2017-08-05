module.exports = (app) => {
    require('../services/passport');
    require('./authRoutes')(app);
};
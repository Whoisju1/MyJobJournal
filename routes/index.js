module.exports = (app) => {

    app.get('/', (req, res) => res.send('whats up?'));
    
    require('../services/passport');
    require('./authRoutes')(app);
};
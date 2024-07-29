// Imporing routes
const usersRoutes = require('../routes/users-routes');
const newsRoutes = require('../routes/news-routes');
const preferencesRoutes = require('../routes/preferences-routes');
const authMiddleware = require('../middleware/auth');

const routes = (app) => {
    app.use(`v1/`, usersRoutes);
    app.use(`v1/`, authMiddleware, newsRoutes);
    app.use(`v1/`, authMiddleware, preferencesRoutes);

    console.log('App routes setup.');
};

module.exports = routes;

// Imporing routes
const usersRoutes = require('../routes/users-routes');
const newsRoutes = require('../routes/news-routes');

const routes = (app) => {
    app.use(`v1/`, usersRoutes);
    // app.use(`v1/`, newsRoutes);

    console.log('App routes setup.');
};

module.exports = routes;

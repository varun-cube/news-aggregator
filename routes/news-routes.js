const express = require('express');
const router = express.Router();
const userReports =  require('../controllers/news-controller');

router.route('/news').post(verifyAcl([{type: 'USER', action: 'CREATE'}]), userReports.createUser);
// router.route('/login').post(userReports.login);

module.exports = router;

const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news-controller');

router.route('/news').post(newsController.getNews);

module.exports = router;

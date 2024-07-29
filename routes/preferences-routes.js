const express = require('express');
const router = express.Router();
const preferencesController = require('../controllers/preference-controller');

router.route('/getPreferences').get(preferencesController.getPreference);
router.route('/updatePreferences').post(preferencesController.updatePrefernce);

module.exports = router;

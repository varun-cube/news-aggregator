const express = require('express');
const router = express.Router();

const getPreference = async (req, res) => {
    const user = req.user;
    res.json(user.preferences);
};

const updatePrefernce = (req, res) => {
    const user = req.user;
    const { preferences } = req.body;

    if (!preferences || !Array.isArray(preferences)) {
        return res.status(400).json({ message: 'Preferences should be an array' });
    }

    user.preferences = preferences;

    res.json({ message: 'Preferences updated successfully' });
};

module.exports = { getPreference, updatePrefernce };

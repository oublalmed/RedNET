const express = require('express');
const router = express.Router();
const HomeControl = require('../Controllers/HomeControl');

router.get('/');
router.get('/' , HomeControl.profileView);

module.exports = router ;
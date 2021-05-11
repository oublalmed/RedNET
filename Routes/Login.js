const express = require('express');
const router = express.Router();
const loginControl = require('../Controllers/LoginControl');

router.get('/');
router.post('/' , loginControl.view);

module.exports = router ;

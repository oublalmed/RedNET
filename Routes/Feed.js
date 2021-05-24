const express = require('express');
const router = express.Router();
const StudentsController = require('../Controllers/StudentsController');

router.get('/' , StudentsController.A);

module.exports = router ;
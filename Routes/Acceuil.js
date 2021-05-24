const express = require('express');
const router = express.Router();
const AcceuilControl = require('../Controllers/AcceuilControl');

router.get('/' , AcceuilControl.view);
router.get('/' , AcceuilControl.filiere);

module.exports = router ;
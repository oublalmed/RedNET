const express = require('express');
const router = express.Router();
const FichiersControl = require('../Controllers/FichiersControl');

router.get('/' , FichiersControl.view);


module.exports = router ;



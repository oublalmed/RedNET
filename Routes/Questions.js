const express = require('express');
const router = express.Router();
const QstControl = require('../Controllers/QstControl');

router.get('/' , QstControl.view);
router.post('/AjouterQst' , QstControl.Poser );

module.exports = router ;

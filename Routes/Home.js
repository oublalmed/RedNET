const express = require('express');
const router = express.Router();
const HomeControl = require('../Controllers/HomeControl');

router.get('/');
router.post('/' , HomeControl.Login);
//router.post('/addEtud' , HomeControl.Ajouter );

module.exports = router ;
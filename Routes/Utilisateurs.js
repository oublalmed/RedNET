const express = require('express');
const router = express.Router();
const UtilisateursControl = require('../Controllers/UtilisateursControl');

router.get('/' , UtilisateursControl.view);
router.get('/:id' , UtilisateursControl.Supprimer);

module.exports = router ;
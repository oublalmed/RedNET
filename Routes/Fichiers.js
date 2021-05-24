const express = require('express');
const router = express.Router();
const FichiersControl = require('../Controllers/FichiersControl');

router.get('/' , FichiersControl.view);
router.post('/add' , FichiersControl.Ajouter );
router.get('/:id' , FichiersControl.Supprimer );

module.exports = router ;



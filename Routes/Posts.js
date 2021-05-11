const express = require('express');
const router = express.Router();
const PostsControl = require('../Controllers/PostsControl');

router.get('/' , PostsControl.view);
router.post('/:id' , PostsControl.Approuver);
router.post('/:id' , PostsControl.Refuser);

module.exports = router ;
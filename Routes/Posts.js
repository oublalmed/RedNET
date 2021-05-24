const express = require('express');
const router = express.Router();
const PostsControl = require('../Controllers/PostsControl');

router.get('/' , PostsControl.view);
router.post('/approve' , PostsControl.Approuver);
router.post('/decline' , PostsControl.Refuser);

module.exports = router ;
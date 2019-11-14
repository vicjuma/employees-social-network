const express = require('express');

const router = express.Router();
const postctr = require('./../controllers/post');

router.use('v1', require('./v1/post'));
router.use('v2', require('./v2/post'));

router.post('/gifs', postctr.createGif);
router.post('/articles', postctr.createArticle);
router.put('/articles', postctr.editArticle);
router.delete('/articles', postctr.deleteArticle);
router.delete('/gifs', postctr.deleteGif);
router.post('/articles/:id/comments', postctr.createArticleComment);
router.post('/gifs/:id/comments', postctr.createGifComment);
router.get('feed', postctr.getFeed);
router.get('/articles/:id', postctr.getArticleById);
router.get('/gifs/:id', postctr.getGifById);


module.exports = router;

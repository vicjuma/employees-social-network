const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'sample',
  api_key: '874837483274837',
  api_secret: 'a676b67565c6767a6767d6767f676fe1',
});

exports.createGif = (req, res) => {};
exports.createArticle = (req, res) => {};
exports.editArticle = (req, res) => {};
exports.deleteArticle = (req, res) => {};
exports.deleteGif = (req, res) => {};
exports.createArticleComment = (req, res) => {};
exports.createGifComment = (req, res) => {};
exports.getFeed = (req, res) => {};
exports.getArticleById = (req, res) => {};
exports.getGifById = (req, res) => {};

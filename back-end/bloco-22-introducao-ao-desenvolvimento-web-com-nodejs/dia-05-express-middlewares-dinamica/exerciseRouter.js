const express = require('express');
const router = express.Router();

const posts = []

const middleError = require('./middleError');
router.use(middleError)

router.get('/:id', function (req, res) {
const { id } = req.params;
const post = posts.find((i) => i.id === id)
if (!post) res.status(404).json({ message: 'post not found' });
res.status(200).json(post);
});


router.get('/', function (req, res) {
  if(!posts[0]) res.status(200).json({ "posts": [] });
  res.status(200).json(posts)
  });

module.exports = router;
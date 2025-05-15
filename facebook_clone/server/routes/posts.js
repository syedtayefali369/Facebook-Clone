const express = require('express');
const auth = require('../middleware/auth');
const Post = require('../models/Post');

const router = express.Router();

// Get all posts
router.get('/', auth, async (req, res) => {
  const posts = await Post.find().populate('user', ['name']).sort({ createdAt: -1 });
  res.json(posts);
});

// Create post
router.post('/', auth, async (req, res) => {
  const newPost = new Post({ user: req.user.id, content: req.body.content });
  const post = await newPost.save();
  res.json(post);
});

module.exports = router;

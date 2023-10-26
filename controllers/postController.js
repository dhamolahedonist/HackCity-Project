const Post = require("../models/postModel");
const User = require("../models/userModel");

// const data = Blog.find();
// console.log(data);

// create blog
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    newPost.user = req.user.userId;
    const savedPost = await newPost.save();
    res.status(200).json({ savedPost });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
};

const Post = require("../models/postModel");
const User = require("../models/userModel");

// create Post
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

// get Post by id
const getSinglePost = async (req, res) => {
  try {
    const { postId } = req.params;

    try {
      const post = await Post.findById(postId).populate("user", ["_id"]);

      if (!post) {
        return res.status(404).json({ status: false, post: null });
      }

      return res.json({ status: true, post });
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        return res.status(404).json({ status: false, post: null });
      }
      throw error;
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  getSinglePost,
};

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

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    const userIdFromToken = req.user.userId;
    if (post.user.toString() !== userIdFromToken) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this post" });
    }

    const deletedPost = await Post.findByIdAndRemove(postId);

    res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const userIdFromToken = req.user.userId;

    if (post.user.toString() !== userIdFromToken) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this post" });
    }

    const updatedPost = await post.save();

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
};

module.exports = {
  createPost,
  getSinglePost,
  getPosts,
  deletePost,
  updatePost,
};

const express = require("express");
const {
  createPost,
  getSinglePost,
  getPosts,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const { verifyToken } = require("../middleware/validation/validateUser");

const postRoute = express.Router();

postRoute.post("/create", verifyToken, createPost);
postRoute.get("/:postId", getSinglePost);
postRoute.get("/", getPosts);
postRoute.delete("/posts/:postId", verifyToken, deletePost);
postRoute.put("/posts/:postId", verifyToken, updatePost);

module.exports = postRoute;

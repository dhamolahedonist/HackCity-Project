const express = require("express");
const {
  createPost,
  getSinglePost,
  getAllPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const { verifyToken } = require("../middleware/validation/validateUser");

const postRoute = express.Router();

postRoute.post("/create", verifyToken, createPost);
postRoute.get("/:postId", getSinglePost);
postRoute.get("/allposts", getAllPost);
postRoute.delete("/posts/:postId", verifyToken, deletePost);
postRoute.put("/posts/:postId", verifyToken, updatePost);

module.exports = postRoute;

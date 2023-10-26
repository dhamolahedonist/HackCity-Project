const express = require("express");
const {
  createPost,
  getSinglePost,
  getAllPost,
  deletePost,
} = require("../controllers/postController");
const { verifyToken } = require("../middleware/validation/validateUser");

const postRoute = express.Router();

postRoute.post("/create", verifyToken, createPost);
postRoute.get("/:postId", getSinglePost);
postRoute.get("/allposts", getAllPost);
postRoute.delete("/posts/:postId", verifyToken, deletePost);

module.exports = postRoute;

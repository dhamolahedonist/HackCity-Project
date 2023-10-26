const express = require("express");
const { createPost, getSinglePost } = require("../controllers/postController");
const { verifyToken } = require("../middleware/validation/validateUser");

const postRoute = express.Router();

postRoute.post("/create", verifyToken, createPost);
postRoute.get("/:postId", getSinglePost);

module.exports = postRoute;

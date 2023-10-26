const express = require("express");
const { createPost } = require("../controllers/postController");
const { verifyToken } = require("../middleware/validation/validateUser");

const postRoute = express.Router();

postRoute.post("/create", verifyToken, createPost);

module.exports = postRoute;

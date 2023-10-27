const express = require("express");
const { createCategory } = require("../controllers/categoryController");

const categoryRoute = express.Router();

categoryRoute.post("/create", createCategory);

module.exports = categoryRoute;

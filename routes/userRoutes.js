const express = require("express");
const { userRegistration } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", userRegistration);

module.exports = userRoute;

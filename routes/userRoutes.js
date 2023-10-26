const express = require("express");
const {
  userRegistration,
  userLogin,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", userRegistration);
userRoute.post("/login", userLogin);

module.exports = userRoute;

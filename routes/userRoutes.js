const express = require("express");
const {
  userRegistration,
  userLogin,
  resetPassword,
  updateUser,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", userRegistration);
userRoute.post("/login", userLogin);
userRoute.post("/reset-password", resetPassword);
userRoute.put("/:id", updateUser);

module.exports = userRoute;

const express = require("express");
const {
  userRegistration,
  userLogin,
  resetPassword,
  updateUser,
  getAllUsers,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", userRegistration);
userRoute.post("/login", userLogin);
userRoute.post("/reset-password", resetPassword);
userRoute.put("/:id", updateUser);
userRoute.get("/", getAllUsers);

module.exports = userRoute;

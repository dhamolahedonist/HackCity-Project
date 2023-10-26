const express = require("express");
const {
  userRegistration,
  userLogin,
  resetPassword,
  updateUser,
  getAllUsers,
} = require("../controllers/userController");
const validateRegister = require("../middleware/validation/validateRegister");

const userRoute = express.Router();

userRoute.post("/register", validateRegister, userRegistration);
userRoute.post("/login", userLogin);
userRoute.post("/reset-password", validateRegister, resetPassword);
userRoute.put("/:id", validateRegister, updateUser);
userRoute.get("/", getAllUsers);

module.exports = userRoute;

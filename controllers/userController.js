const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// User registration route
const userRegistration = async (req, res) => {
  try {
    const { username, first_name, last_name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });
    await user.save();

    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

module.exports = {
  userRegistration,
};

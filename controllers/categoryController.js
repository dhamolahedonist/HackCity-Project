const express = require("express");
const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

module.exports = {
  createCategory,
};

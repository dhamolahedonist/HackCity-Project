const express = require("express");
const userRoute = require("./routes/userRoutes");

require("./config/db").connectToMongoDB();
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: true });
});

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});

module.exports = app;

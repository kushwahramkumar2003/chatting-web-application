const express = require("express");

const app = express();
const routes = require("./routes/index.routes.js");

app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);
app.use(express.json());

// app.use("/api/v1", routes);
app.get("/", (_req, res) => {
  res.send("Hello there Ramkumar's - API");
});

app.all("*", (_req, res) => {
  return res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = { app };

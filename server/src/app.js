import express from "express";

const app = express();
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

export default app;

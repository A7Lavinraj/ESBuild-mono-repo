import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use("*", (_, res) => {
  res.send("Welcome to Express.JS");
});

app.listen(PORT, () => {
  console.log(`[Express]: listening at http://localhost:${PORT}`);
});

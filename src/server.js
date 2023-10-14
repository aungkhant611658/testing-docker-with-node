const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Docker Testing App!");
});

app.listen(3000, () => {
  console.log("Api server running at 3000");
});

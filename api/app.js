const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5001, (err) => {
  console.log("Server is running on port 5001");
  if (err) {
    console.log("Error : " + err);
  }
});

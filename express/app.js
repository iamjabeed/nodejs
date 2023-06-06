const express = require("express");
const app = express();
// console.log("nodemon");
const port = 3000
app.get("/", (req, res) => {
  console.log("listening on port 3000");
  res.send('Hello World!')
});

app.listen(port, (req, res) => {
    console.log(`Example app listening on port ${port}`)
});
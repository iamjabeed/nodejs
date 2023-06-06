const express = require("express");
const app = express();
// console.log("nodemon");
const port = 3000


app.get("/", (req, res) => {
  console.log("listening on port 3000");
  res.send('<h1>Hello World!</h1>')
});
app.get("/about", (req, res) => {
  
  res.send("<p>nodemon supports local and global configuration files. These are usually named nodemon.json and can be located in the current working directory or in your home directory.</p>")
});
app.get("/contact", (req, res) => {
  
  res.send('Contact username')
});


app.listen(port, (req, res) => {
    console.log(`Example app listening on port ${port}`)
});
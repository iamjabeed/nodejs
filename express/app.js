const express = require("express");
const app = express();
const path = require("path");

// console.log("nodemon");
const port = 3000;

//? Register ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("listening on port 3000");
  // console.log(__dirname);
  // const filePath = path.join(__dirname, "views", "index.html");
  // res.sendFile(filePath);
  // res.sendFile("./views/index.html");

  //? With ejs
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });

  //? With ejs
  res.render("about", { title: "About" });
});

// app.get('/about', (req, res) => {
//   const filePath = path.join(__dirname, 'views', 'about.html');
//   res.sendFile(filePath);
// });

app.get("/contact", (req, res) => {
  res.send("<h1> Contact Page </h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>Oops, Page not found:) </h1>");
});

app.listen(port, (req, res) => {
  console.log(`app listening on port ${port}`);
});

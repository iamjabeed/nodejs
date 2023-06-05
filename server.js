const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  //* Step-1: set header
  // res.setHeader("Content-Type", "text/html");

  //* Step-2: send response
  // res.write("<h1>Hello from node server</h1>");

  //* Step-3: end server
  // res.end();

  //? another way to do this
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
  });
});

server.listen(3300, "localhost", () => {
  console.log("listening at port number 3300");
});

//* sending html pages

// fs.mkdir("./views", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("folder created");
// });

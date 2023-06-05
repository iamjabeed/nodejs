const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");

  //* Step-1: set header
  res.setHeader("Content-Type", "text/html");

  //* Step-2: send response
  res.write("<h1>Hello from node server</h1>");

  //* Step-3: end server
  res.end();
});

server.listen(3300, "localhost", () => {
  console.log("listening at port number 3300");
});

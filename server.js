const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3300, "localhost", () => {
  console.log("listening at port number 3300");
});

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});


//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("JavaScript\n");
});
//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



app.set("port", process.env.PORT || 7000);
app.listen(app.get("port"), function() {
  console.log("server started on port" + app.get);
});

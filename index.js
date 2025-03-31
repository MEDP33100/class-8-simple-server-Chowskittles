//1. import http library
const {createServer} = require('http');
//Http2ServerRequest.createServer();
const fs = required('fs');
const path = required('path');

//2. set the hostname and the port

const hostname = '127.0.0.1'; //127.0.0.1 = localhost
const port = 3000; // port can = 3000, 3001, 8000, 8001

//3. Create a new server with createServer();
//https://www.w3schools.com/nodejs/met_http_createserver.asp

const server = createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port);